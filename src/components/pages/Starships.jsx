import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

const Starships = () => {
    const [starships, setStarships] = useState([])


    useEffect(() => {
        async function getStarships() {
            try {
                const urls = ['https://swapi.dev/api/starships/',
                'https://swapi.dev/api/starships/?page=2',
                'https://swapi.dev/api/starships/?page=3',
                'https://swapi.dev/api/starships/?page=4',
                ]

                let responses = urls.map(url => axios.get(url))

                responses = await Promise.all(responses)
                
                let responseData = []
                responses.forEach(response => responseData = [...responseData, ...response.data.results])
                
                console.log(responseData)
                // const response = await axios.get(url)
                // setStarships(response.data.results)
            } catch (err) {
                console.log(err)
            }
        }
        getStarships()
    }, [])

    // sanity check to log state
    useEffect(() => {
        console.log(starships)
    }, [starships])

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

export default Starships;