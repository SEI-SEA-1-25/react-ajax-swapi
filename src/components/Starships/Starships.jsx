import { useEffect, useState } from 'react'
import  axios from 'axios'
import { Link } from 'react-router-dom'

const Starships = () => {
    
    const [starships, setStarships] = useState([])

    useEffect(() => {
      axios.get(`https://swapi.dev/api/starships/`)
      .then(response => {
        setStarships(response.data.results)
      })
    }, [] )
  
    console.log(starships)

   return(

        <div className="LinkDiv">
            
            {starships.map((starship, index) => {

            return (
                    
                <div key= {index} className = "LinksDivs">

                    <Link className ="Links" key={index} to={{pathname:`/starshipData/${index}`, props:starship}}>{starship.name}</Link>

                </div>

            )
        })}
        
       
        
        </div>
 
   )
}

export default Starships;