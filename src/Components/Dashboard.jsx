import React from 'react';
import Nav from './Nav';
import "./styles/Home.css";
import BGVideo from "../assets/13057075_3840_2160_24fps.mp4"
import About from './About';
import Cart from "./Cart"
import CardData from "./CartData.js"


export default function Dashboard() {
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
      <section className="Catlog">
      {CardData.gamingPCItems.map((item) => (
          <Cart
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </section>

    </div>
  )
}
