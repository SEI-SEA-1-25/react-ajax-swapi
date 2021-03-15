import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 

import StarshipPage from './StarshipPage'

function Home() {
    const [starships, setStarships] = useState([])

    console.log(starships)

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
        .then(response => {
            setStarships(response.data.results)
        })
    }, [])


    return (
        <div>

            <h2>Hello from Home!</h2>
        </div>
    )
}

export default Home;