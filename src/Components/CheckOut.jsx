import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./styles/CheckOut.css";

export default function Checkout() {
    const selectedComponents = useSelector((state) => state.component.selectedComponents);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
    });
    const [message, setMessage] = useState("");

    // Handle input change for form fields
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission and send data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/user/ShippingDetails", {
                ...formData,
                selectedComponents,
            });
            console.log("Order placed:", response.data);
            setMessage("Order placed successfully!");
            setFormData({
                name: "",
                address: "",
                email: "",
            })
        } catch (error) {
            console.error("Error placing order:", error);
            setMessage("Error placing order. Please try again.");
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout Page</h2>
            <div className="selected-components">
                <h3>Your Selected Components:</h3>
                <ul>
                    {selectedComponents.map((component) => (
                        <li key={component.id}>
                            {component.title} - ₹{component.price}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="shipping-details">
                <h3>Shipping Details</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            required
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>
                    <div className="form-field">
                        <label>Shipping Address:</label>
                        <input
                            type="text"
                            name="address"
                            required
                            onChange={handleChange}
                            value={formData.address}
                        />
                    </div>
                    <div className="form-field">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            required
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Place Order
                    </button>
                </form>
            </div>
            {message && <p className="order-message">{message}</p>}
        </div>
    );
}
