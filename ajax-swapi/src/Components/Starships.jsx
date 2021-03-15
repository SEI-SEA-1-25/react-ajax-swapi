  
import { useState, useEffect } from 'react'
import axios from 'axios'
import StarshipButton from './StarshipButton.jsx'
 
export default function Starships(props) {
  const [ships, setShips] = useState([])

  useEffect(() => {
    (async function getShips() {
      const urls = [
        'https://swapi.dev/api/starships/',
      ]

      let response = urls.map(url => axios.get(url))

      response = await Promise.all(response)

      let responseData = []
      response.forEach(response => responseData = [...responseData, ...response.data.results])
      setShips(responseData)
    })()
  }, [])

  useEffect(() => {
    console.log(ships)
  }, [ships])

  const starshipButtons = ships.map((ship, index) => <StarshipButton key={index} ship={ship} />)

  return (
    <div>
      <h3>Starships:</h3>

      <div>
        {starshipButtons}
      </div>
    </div>
  )
}