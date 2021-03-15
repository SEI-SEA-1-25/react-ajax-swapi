import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom' 
import axios from 'axios'

import StarshipPage from './StarshipPage'

const Home = () => {
    const [starships, setStarships] = useState([])

    console.log(starships)

    useEffect(() => {
        axios.get ('https://swapi.dev/api/starships/')
        .then((response) => {
            setStarships(response.data.results)
        })
    }, [])


    return (
        <div>
            {starships.map((starship, i) => {
                return (
                    <div key={i}>
                        <Link 
                            key={starship.name}
                            to={{
                                pathname: '/starship',
                                state: starship
                            }}
                        >
                            {starship.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;