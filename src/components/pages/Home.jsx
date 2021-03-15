import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

const Home = () => {
    const [starships, setStarships] = useState([])

    // console.log(starships)

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
                            to={{
                            pathname: '/starship',
                            state: starship
                            }}
                            key={starship.name}
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