// Checkout.js
import { useSelector } from "react-redux";
import "./styles/CheckOut.css"

export default function Checkout() {
  const selectedComponents = useSelector((state) => state.component.selectedComponents);

  return (
    <div className="checkout-container">
      <h2>Checkout Page</h2>
      <div className="selected-components ">
        <h3>Your Selected Components:</h3>
        <ul>
          {selectedComponents.map((component) => (
            <li key={component.id}>{component.title} - ₹{component.price}</li>
          ))}
        </ul>
      </div>
      <div className="shipping-details ">
        <h3>Shipping Details</h3>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Shipping Address:</label>
            <input type="text" name="address" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          {/* Add more fields as needed */}
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}
