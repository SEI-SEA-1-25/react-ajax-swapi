import { useEffect, useState } from 'react'
import  axios from 'axios'
import { Link } from 'react-router-dom'

const Planets = () => {
    
    const [planets, setplanets] = useState([])

    useEffect(() => {
      axios.get(`https://swapi.dev/api/planets/`)
      .then(response => {
        setplanets(response.data.results)
      })
    }, [] )
  
    console.log(planets)

   return(

        <div className="LinkDiv">
            
            {planets.map((planet, index) => {

            return (
        
                <div key= {index} className = "LinksDivs">

                    <Link className ="Links" key={index} to={{pathname:`/planetData/${index}`, props:planet}}>{planet.name}</Link>

                </div>

            )
        })}
        
       
        
        </div>
 
   )
}

export default Planets;