import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardData from './CartData'; // Make sure your data file is correctly exported
import './styles/Booking.css';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const numericId = Number(productId);

  // Find the product using its id
  const product = CardData.Products.find(item => item.id === numericId);

  // State for order form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate order placement (you can replace this with your API call)
    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      setError("Please fill in all the details.");
      return;
    }
    // For demo, we'll just log the data and show a success message.
    console.log("Order placed for product", product, formData);
    setOrderPlaced(true);
    setError("");
  };

  return (
    <div className="booking-page">
      {product ? (
        <>
          <section className="booking-product">
            <div className="product-image">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </section>

          <section className="booking-form-section">
            {orderPlaced ? (
              <div className="order-success">
                <h3>Order Placed Successfully!</h3>
                <p>Thank you for your purchase.</p>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handlePlaceOrder}>
                <h2 className="form-title">Buy Now</h2>
                {error && <p className="form-error">{error}</p>}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Shipping Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Your address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">Place Order</button>
              </form>
            )}
          </section>
        </>
      ) : (
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <p>Please check the URL and try again.</p>
        </div>
      )}
    </div>
  );
}
