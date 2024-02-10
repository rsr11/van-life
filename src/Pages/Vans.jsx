import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="VanCard">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="VanCardDetail">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <button
        style={
          van.type === "rugged"
            ? { background: "green", border: "2px solid green" }
            : van.type === "luxury"
            ? { background: "black", border: "2px solid black" }
            : {}
        }
        className="VanCardBtn"
      >
        {van.type}
      </button>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
             <h1 style={{ marginLeft: "5vw", marginTop: "40px" }}>
        Explore our van options
      </h1>
            <div className="VanCardsContainer">
                {vanElements}
            </div>
        </div>
    )
}