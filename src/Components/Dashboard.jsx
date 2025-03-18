import React from 'react';
import Nav from './Nav';
import "./styles/Home.css";
import BGVideo from "../assets/13057075_3840_2160_24fps.mp4";
import About from './About';
import Cart from "./Cart";
import CardData from "./CartData.js";
import Contact from "./Contact";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const navigateToBookingPage = (id) => {
    navigate("/Booking", { state: { productId: id } });
  };

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
        <button className='BUILD-BTN'>BUILD YOUR OWN</button>
      </section>
      <section className="AboutContainer">
        <About />
      </section>

      <p className='PC_TYPE_NAME'>Gaming PC</p>
      <section className="Catlog">
        {CardData.gamingPCItems.map((item) => (
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
        {CardData.budgetPCItems.map((item) => (
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
        {CardData.miniPCItems.map((item) => (
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
        {CardData.workstationPCItems.map((item) => (
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
