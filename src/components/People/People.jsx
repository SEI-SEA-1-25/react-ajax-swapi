import { useEffect, useState } from 'react'
import  axios from 'axios'
import { Link } from 'react-router-dom'

const People = () => {
    
    const [peoples, setPeoples] = useState([])

    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/`)
      .then(response => {
        setPeoples(response.data.results)
      })
    }, [] )
  
    console.log(peoples)

   return(

        <div className="LinkDiv">
            
            {peoples.map((people, index) => {

            return (
                    
                <div key= {index} className = "LinksDivs">

                    <Link className ="Links" key={index} to={{pathname:`/peopleData/${index}`, props:people}}>{people.name}</Link>

                </div>

            )
        })}
        
       
        
        </div>
 
   )
}

export default People;