import { useState, useEffect } from 'react'

import { Route, Link } from 'react-router-dom' 

import StarshipPage from './StarshipPage'

function Home() {
    const [starships, setStarships] = useState([])

    console.log(starships)

    useEffect(() => {
        fetch ('https://swapi.dev/api/starships/')
        .then((response) => response.json())
        .then((data) => {
            const starships = Object.values(data)
            setStarships(starships)
        })
    }, [])


    return (
        <div>
            {starships.map((starship) => {
                return (
                    <div>
                        <Link 
                            // key={starship.results.name}
                            // to={{
                            //     pathname: '/starship',
                            //     state: starship
                            // }}
                        >
                            {starship.results.name}
                        </Link>
                        <Route path='/starship' render={({location}) => 
                        <StarshipPage 
                            location={location}/>
                         }/>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;