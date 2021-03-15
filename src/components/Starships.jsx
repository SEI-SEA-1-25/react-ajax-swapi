import { useEffect, useState} from 'react'
import axios from 'react'
import StarshipButton from "./StarshipButton"

export default function Starships() {
  const [ships, setShips] = useState([])
  useEffect(() => {
    async function getShips() {
      try {
        const urls = [
         "https://swapi.dev/api/starships",
         "https://swapi.dev/api/starships?page=2",
         "https://swapi.dev/api/starships?page=3",
         "https://swapi.dev/api/starships?page=4"
        ]

        let responses = urls.map(url => axios.get(url))
        responses = await Promise.all(responses)
        let responseData = []
        responses.forEach(response => responseData = [...responseData, ...response.data.results])
        
        console.log(responses)
        // const response = await axios.get(url)
        // setShips(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getShips()
  }, [])

  useEffect(() => {
    console.log(ships)
  }, [ships])

  const starshipButtons = ships.map((ship, index) => <StarshipButton key={index} ship={ship} />)
  return(
    <div>
      <h2>starships:</h2>    
    <div>
      {starshipButtons}
    </div>
    </div>
  )
}