import React from 'react'
import AboutImg from "../assets/AboutPageImg.png";

const About = () => {
  return (
      <>
        <img src={AboutImg} width="100%" className='sm:h-[50v] bg-cover' />
        <div style={{ padding: "30px" }}>
          <h1 style={{ marginTop: "20px" }}>
            Don't squeeze in a seden when you could relax in a van.
          </h1>
          <p style={{ marginTop: "30px" }}>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
  
          <p style={{ marginTop: "20px" }}>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div
            style={{
              backgroundColor: "#FFCC8D",
              padding: "40px 35px",
              borderRadius: "5px",
              marginTop: "50px"
             
            }}
          >
            <h2>You destination is waiting.</h2>
            <h2>You van is ready.</h2>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                border: "2px solid black",
                borderRadius: "5px",
                marginTop: "25px"
              }}
            >
              Explore our vans{" "}
            </button>
          </div>
        </div>
      </>
  )
}

export default About
