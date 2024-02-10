import React, { useEffect, useState } from 'react'

const VanHost = () => {


    const [vans, setVans] = useState([]);


    const GetData = async ()=>{
        const res = await fetch("/api/host/vans")
        const data = await res.json();
        setVans(data)
    }
    

    // const VansCards = vans.map((e)=>{
    //       return <>
    //         <div id={e.id}>
    //     <h1>{e.id}</h1>
    //     </div>

    //     </>
    // }


            
    // )
// 



    // fetch("/api/host/vans").then(res => res.json()).then(data => setVans(data)).catch(err => console.log(err));   
    useEffect( () => {  GetData() },[])


    console.log(vans.length);
// 
  return (
    <div>
      <h1>Your Listed Vans</h1>
      {vans.length === 3 ? <h1>Nothing</h1> : <h1>Have something</h1>}
      
      

    </div>
  )
}

export default VanHost
