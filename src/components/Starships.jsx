import { useState, useEffect } from 'react'
import axios from 'axios'
import StarshipButton from './StarshipButton'
export default function Starships () {
    const [ships, setShips] = useState([])

    useEffect(() => {
        async function getShips () {
            try {
                const url = 'https://swapi.dev/api/starships/'
                const response = await axios.get(url)
                setShips(response.data.results)
            }
            catch (error) {
                console.log(error)
            }
        }
        getShips()
    }, [])
    useEffect(() => {
        console.log(ships)
    }, [ships])
    const starshipButtons = ships.map((ship, index) => <StarshipButton key={index} ship={ship}/>)
    return (
        <div>
            <h2>Starships:</h2>
            <div>
                {starshipButtons}
            </div>
        </div>
    )
}