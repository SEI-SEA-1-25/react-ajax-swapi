import { useEffect, useState } from 'react'
import StarshipButton from './StarshipButton'

export default function Starship() {
    const [starships, setStarships] = useState('');

    useEffect(() => {
        async function fetchStarships() {
            const response = await fetch('https://swapi.dev/api/starships/')
            const json = await response.json()
            setStarships(json.results[0])
            // console.log(json.results[0].name)
        }
        fetchStarships();
    }, []);

    // let allShips = starships.map(starship => <StarshipButton key={starship.name} />)

    return (
        this.props.starships.map((starship, i) => {
            <div keys={i} >
                <p>{starship.name} </p>
            </div>
        })

    )
}