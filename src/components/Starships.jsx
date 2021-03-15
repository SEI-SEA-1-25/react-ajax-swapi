import { useEffect, useState } from 'react'
import axios from 'axios'
import StarshipButton from './StarshipButton'

export default function Starships() {
  // ships fetched from SWPI
  const [ships, setShips] = useState([])

  // get ships from SWAPI
  useEffect(() => {  
    async function getShips() {
      try {
        const urls = [
          'https://swapi.dev/api/starships/',
          'https://swapi.dev/api/starships/?page=2',
          'https://swapi.dev/api/starships/?page=3',
          'https://swapi.dev/api/starships/?page=4',
        ]

        let responses = urls.map(url => axios.get(url))
        
        responses = await Promise.all(responses)

        let responseData = []
        responses.forEach(response => {
          console.log(responseData)
          responseData = [...responseData, ...response.data.results]
        })

        console.log(responseData)
        // const response = await axios.get(url)
        setShips(responseData)
      } catch (error) {
        console.log(error)
      }
      
    }
    getShips()
  }, [])

  // sanity check to log state
  useEffect(() => {
    console.log(ships)
  }, [ships])

  const starshipButtons = ships.map((ship, index) => <StarshipButton key={index} ship={ship} />)
  return (
    <div>
      <h2>Starships:</h2>
      <div>
        {starshipButtons}
      </div>
    </div>
  )
}