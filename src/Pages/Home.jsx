import React from 'react'
import HomeImg from "../assets/VanLifeHomeImg.png"
import "../App.css"

const Home = () => {
  return (
    <>
    <div className='' >
      <div
        className="Home-banner sm:h-[80vh] sm:w-full"
        style={{
          backgroundImage: `url(${HomeImg})`,
          backgroundSize: "cover"
        }}
      >
        <h1 className='sm:text-4xl sm:text-center' style={{ color: "white", marginTop: "30px" }}>
          You Got The Travel Plans, We Got The Travel Vans.
        </h1>
        <p className='sm:text-2xl sm:text-center sm:pt-10' style={{ color: "white", marginTop: "30px" }}>
          Add adventure to your life by joining the #vanlife movement.
        </p>
        <p className='sm:text-2xl sm:text-center' style={{ color: "white" }}>
          Rent the perfect van to make your perfect road trip.
        </p>
        <div className='sm:flex sm:justify-center'>
        <button className="home-btn sm:relative sm:mt-40 sm:w-[20vw] sm:p-5 sm:text-lg">Find your van</button>
        </div>
      </div>
      </div>
    </>
  )
}



export default Home
