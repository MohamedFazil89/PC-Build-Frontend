import { useState, useEffect } from "react";
import axios from "axios";
import Nav from './Nav';
import "./styles/Home.css";
import BGVideo from "../assets/13057075_3840_2160_24fps.mp4";
import About from './About';
import Cart from "./Cart";
import CardData from "./CartData.js";
import Contact from "./Contact";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [Products, setProducts] = useState([]);
  const navigate = useNavigate();

  const navigateToBookingPage = (id) => {
    // In your Dashboard component:
    navigate(`/Booking?productId=${id}`);
  };
  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        console.log("Fetched products:", response.data);
        setProducts(response.data.Product_Collection);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    handleFetchData();
  }, []);

   


  const Gaming_PC = Products.filter(product => product.type === "Gaming_PC");
  const BUDGETPC = Products.filter(product => product.type === "BUDGET_PC");
  const MINI_PC = Products.filter(product => product.type === "MINI_PC");
  const WORK_STATION = Products.filter(product => product.type === "WORK_STATION");


  return (
    <div>
      <Nav />
      <section className='Home-container'>
        <div className="overlay"></div>
        <video
          src={BGVideo}
          autoPlay
          muted
          playsInline
          loop
          className="BGVideo"
        ></video>
        <p className='Top-title'>EVERYTHING YOU NEED</p>
        <p className='Bold-title'>TO <span>PERFORM</span> YOUR BEST</p>
        <button className='BUILD-BTN' onClick={() => navigate("/CustomBuild")}>BUILD YOUR OWN</button>
      </section>
      <section className="AboutContainer">
        <About />
      </section>

      <p className='PC_TYPE_NAME'>Gaming PC</p>
      <section className="Catlog">
        {Gaming_PC.map((item) => (
          <Cart
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            img={item.img}
            handelProductClick={() => navigateToBookingPage(item.id)}
          />
        ))}
      </section>

      <p className='PC_TYPE_NAME'>BUDGET PC</p>
      <section className="Catlog">
        {BUDGETPC.map((item) => (
          <Cart
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            img={item.img}
            handelProductClick={() => navigateToBookingPage(item.id)}
          />
        ))}
      </section>

      <p className='PC_TYPE_NAME'>MINI PC</p>
      <section className="Catlog">
        {MINI_PC.map((item) => (
          <Cart
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            img={item.img}
            handelProductClick={() => navigateToBookingPage(item.id)}
          />
        ))}
      </section>

      <p className='PC_TYPE_NAME'>WORK STATIONS</p>
      <section className="Catlog">
        {WORK_STATION.map((item) => (
          <Cart
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            img={item.img}
            handelProductClick={() => navigateToBookingPage(item.id)}
          />
        ))}
      </section>

      <Contact />
    </div>
  );
}
