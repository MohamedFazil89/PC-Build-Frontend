import "./styles/BuildNow.css";
import PC_Components from "./PC_Components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedComponents } from "../redux/ComponentSlice";
import { useNavigate } from "react-router-dom";

const typeMap = {
  "Processor": "processor",
  "Motherboard": "motherboard",
  "Memory (RAM)": "memoryRAM",
  "Storage (SSD/HDD)": "storage",
  "Graphics Card (GPU)": "graphics",
  "Power Supply Unit (PSU)": "power_Supply",
  "Computer Case": "computer_Case",
  "Cooling System": "cooling_System",
  "Operating System": "operatingsystem",
};

export default function BuildNow() {
  const [LastCom, setLastCom] = useState(false);
  const [buildComponents, setBuildComponents] = useState({
    processor: 0,
    motherboard: 0,
    memoryRAM: 0,
    storage: 0,
    graphics: 0,
    power_Supply: 0,
    computer_Case: 0,
    cooling_System: 0,
    operatingsystem: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to keep track of the active nav item
  const [activeComponent, setActiveComponent] = useState("Processor");

  const Processor = PC_Components.filter((product) => product.type === "Processor");
  const Motherboard = PC_Components.filter((product) => product.type === "Motherboard");
  const Memory_RAM = PC_Components.filter((product) => product.type === "Memory (RAM)");
  const Storage_SSD_HDD = PC_Components.filter((product) => product.type === "Storage (SSD/HDD)");
  const Graphics_Card = PC_Components.filter((product) => product.type === "Graphics Card (GPU)");
  const Power_Supply_Unit = PC_Components.filter((product) => product.type === "Power Supply Unit (PSU)");
  const Computer_Case = PC_Components.filter((product) => product.type === "Computer Case");
  const Cooling_System = PC_Components.filter((product) => product.type === "Cooling System");
  const Operating_System = PC_Components.filter((product) => product.type === "Operating System");

  // Display the Processor list initially
  const [componentList, setComponentList] = useState(Processor);

  const handleSelectComponent = (product) => {
    const key = typeMap[product.type];
    if (!key) {
      console.error("Unknown product type:", product.type);
      return;
    }

    // Update the selected component for this category.
    setBuildComponents((prev) => ({
      ...prev,
      [key]: product.id,
    }));

    // If the user selects the Operating System, consider it the last component.
    if (product.type === "Operating System") {
      setLastCom(true);
    }

    console.log(`Selected ${product.title} for ${key}`);
  };

  // Create a single array of selected components.
  const selectedComponents = PC_Components.filter((product) => {
    const key = typeMap[product.type];
    return key && buildComponents[key] === product.id;
  });

  // Calculate total rate (price) of selected components.
  const totalRate = Math.floor(
    selectedComponents.reduce((sum, product) => sum + Number(product.price), 0)
  );

  // Function to handle nav item click
  const handleNavClick = (componentName, componentArray) => {
    setComponentList(componentArray);
    setActiveComponent(componentName);
  };

  const handleBookNow = () => {
    dispatch(setSelectedComponents(selectedComponents));
    navigate("/checkout");
  };

  // Get the selected id for the current active category
  const currentSelectedId = buildComponents[typeMap[activeComponent]];

  return (
    <div className="Custom_PC_Container">
      <nav className="Component_Names">
        <ul>
          <li
            className={activeComponent === "Processor" ? "active" : ""}
            onClick={() => handleNavClick("Processor", Processor)}
          >
            Processor
          </li>
          <li
            className={activeComponent === "Motherboard" ? "active" : ""}
            onClick={() => handleNavClick("Motherboard", Motherboard)}
          >
            Motherboard
          </li>
          <li
            className={activeComponent === "Memory (RAM)" ? "active" : ""}
            onClick={() => handleNavClick("Memory (RAM)", Memory_RAM)}
          >
            Memory (RAM)
          </li>
          <li
            className={activeComponent === "Storage (SSD/HDD)" ? "active" : ""}
            onClick={() => handleNavClick("Storage (SSD/HDD)", Storage_SSD_HDD)}
          >
            Storage (SSD/HDD)
          </li>
          <li
            className={activeComponent === "Graphics Card (GPU)" ? "active" : ""}
            onClick={() => handleNavClick("Graphics Card (GPU)", Graphics_Card)}
          >
            Graphics Card (GPU)
          </li>
          <li
            className={activeComponent === "Power Supply Unit (PSU)" ? "active" : ""}
            onClick={() => handleNavClick("Power Supply Unit (PSU)", Power_Supply_Unit)}
          >
            Power Supply Unit (PSU)
          </li>
          <li
            className={activeComponent === "Computer Case" ? "active" : ""}
            onClick={() => handleNavClick("Computer Case", Computer_Case)}
          >
            Computer Case
          </li>
          <li
            className={activeComponent === "Cooling System" ? "active" : ""}
            onClick={() => handleNavClick("Cooling System", Cooling_System)}
          >
            Cooling System
          </li>
          <li
            className={activeComponent === "Operating System" ? "active" : ""}
            onClick={() => handleNavClick("Operating System", Operating_System)}
          >
            Operating System
          </li>
        </ul>
      </nav>
      <section className="ComponentList">
        {componentList.map((product, index) => (
          <div
            key={index}
            className={`product_card ${currentSelectedId === product.id ? "selected" : ""
              }`}
          >
            <img src={product.img} alt={product.title} className="product_img" />
            <span className="product_description">
              <p className="product_title">{product.title}</p>
              <p className="product_description">{product.description}</p>
              <p className="product_price">₹{product.price}</p>
              <p className="product_type">{product.type}</p>
              <button
                onClick={() => handleSelectComponent(product)}
                className="Select_Btn"
              >
                Select
              </button>
            </span>
          </div>
        ))}
        <p>Your Cart</p>

        {LastCom && (
          <section className="BookPC">
            {selectedComponents.map((product, index) => (
              <div key={index} className="booking_product_card">
                <img
                  src={product.img}
                  alt={product.title}
                  className="booking_product_img"
                />
                <span className="booking_product_description">
                  <p className="booking_product_title">{product.title}</p>
                  <p className="booking_product_description">
                    {product.description}
                  </p>
                  <p className="booking_product_price">₹{product.price}</p>
                  <p className="booking_product_type">{product.type}</p>
                </span>
              </div>
            ))}
          </section>
        )}
      </section>
      {LastCom && (
        <div className="total_rate">
          <h3>Total Price: ₹{totalRate}</h3>
          <button onClick={handleBookNow}>Book Now</button>
        </div>
      )}
    </div>
  );
}
