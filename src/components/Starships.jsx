import { useEffect, useState } from 'react'
import axios from 'axios'
import StarshipButton from "./StarshipButton"

const StarshipPage = (props) => {
  
  const [ships, setShips] = useState([])

  useEffect(() => {
    async function getShips() {
      try {
        const urls = [
          'https://swapi.dev/api/starships/',
          'https://swapi.dev/api/starships/?page=2',
          'https://swapi.dev/api/starships/?page=3',
          'https://swapi.dev/api/starships/?page=4'
        ]
        let responses = urls.map(url => axios.get(url))
        responses = await Promise.all(responses)
        let responseData = []
        responses.forEach(response => responseData = [...responseData, ...response.data.results])
        setShips(responseData)
      } catch (error) {
        console.log(error);
      }
    }
    getShips()
  }, [])
  
  const starshipButtons = ships.map((ship, index) =>
    <StarshipButton key={index} ship={ship} />
  )

  return (
    <div>
      <h1>Starships</h1>
      <div className='button-container'>
        {starshipButtons}
      </div>
    </div>
  )
}

export default StarshipPage;