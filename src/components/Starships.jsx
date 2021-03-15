import { useEffect, useState } from 'react'
import StarshipButton from './StarshipButton'
import axios from 'axios'

export default function Starships() {
  // ships fetched from SWPI
  const [ships, setShips] = useState([])

  useEffect(() => {
    async function getShips() {
      try {
        const url = 'https/swapi.dev/api/starships/'
        const response = await axios.get()
        // console.log(response.data.restuls)
      } catch(error) {
        console.log(error)
      }

    }
    getShips()
  }, [])

useEffect(() => {
  console.log(ships)
}, [ships])

const starShipButtons = ships.map((ship, index) => <StarshipButton key={index} ship={ship} />)
  return (
    <div>
      <h2>hello from starships</h2>
      <div>
        {starshipButtons}
      </div>
    </div>
  )
}