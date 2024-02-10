import React from 'react'

import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className="sm:mx-32 sm:my-10">
            {van ? (
                <div className=" sm:flex sm:gap-16">
                    <img src={van.imageUrl} className='sm:h-[80vh] rounded-md' />
                    <div>
                    <button
        style={
          van.type === "rugged"
            ? { background: "green", border: "2px solid green" }
            : van.type === "luxury"
            ? { background: "black", border: "2px solid black" }
            : {}
        }
        className="VanCardBtn sm:text-xl sm:my-5"
      >
        {van.type}
      </button>
                    <h2 className='text-3xl sm:my-5 font-bold' >{van.name}</h2>
                    <p className="van-price sm:text-2xl sm:my-5"><span className='font-bold'>${van.price}</span>/day</p>
                    <p className=' sm:my-5'>{van.description}</p>
                    <button className="link-button bg-orange-600 sm:p-4 sm:text-xl sm:rounded-md text-white ">Rent this van</button>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
