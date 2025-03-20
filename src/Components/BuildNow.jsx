import "./styles/BuildNow.css"
import PC_Components from "./PC_Components"
import { useState } from "react";

export default function BuildNow() {
  const Processor = PC_Components.filter((product) => product.type === "Processor");
  const Motherboard = PC_Components.filter((product) => product.type === "Motherboard");
  const Memory_RAM = PC_Components.filter((product) => product.type === "Memory (RAM)");
  const Storage_SSD_HDD = PC_Components.filter((product) => product.type === "Storage (SSD/HDD)");
  const Graphics_Card = PC_Components.filter((product) => product.type === "Graphics Card (GPU)");
  const Power_Supply_Unit = PC_Components.filter((product) => product.type === "Power Supply Unit (PSU)");
  const Computer_Case = PC_Components.filter((product) => product.type === "Computer Case");
  const Cooling_System = PC_Components.filter((product) => product.type === "Cooling System");
  const Operating_System = PC_Components.filter((product) => product.type === "Operating System");
  const [Component, setComponent] = useState(Processor);


  const selectedComponent = (id) =>{
    console.log(id);
    
  }
  
  return (
    <div className="Custom_PC_Container">
   <nav className="Component_Names">
    <ul>
      <li onClick={() => setComponent(Processor)}>Processor</li>
      <li onClick={() => setComponent(Motherboard)}>Motherboard</li>
      <li onClick={() => setComponent(Memory_RAM)}>Memory_RAM</li>
      <li onClick={() => setComponent(Storage_SSD_HDD)}>Storage_SSD_HDD</li>
      <li onClick={() => setComponent(Graphics_Card)}>Graphics_Card</li>
      <li onClick={() => setComponent(Power_Supply_Unit)}>Power_Supply_Unit</li>
      <li onClick={() => setComponent(Computer_Case)}>Computer_Case</li>
      <li onClick={() => setComponent(Cooling_System)}>Cooling_System</li>
      <li onClick={() => setComponent(Operating_System)}>Operating_System</li>
    </ul>

   </nav>
   <section className="ComponentList">
   {Component.map((product, index) => (
          <div key={index} className="product_card">
            <img src={product.img} alt={product.title} className="product_img"/>
            <span className="product_description">
            <p className="product_title">{product.title}</p>
            <p className="product_description">{product.description}</p>
            <p className="product_price">${product.price}</p>
            <p className="product_type">{product.type}</p>
            <button onClick={selectedComponent(product.id)}>Select</button>
            </span>

          </div>
        ))}
   </section>
    </div>
  )
}
