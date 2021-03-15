import React, { Components} from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


const StarshipPage = () => {
    const [starships, setStarships] = useState([])

    useEffect(() => {
        async function getStarships() {
        const url = (`https://swapi.dev/api/starships/`)
        const response = await fetch(url)
        const json = await response.json() 
        setStarships(json)
      }
      getStarships()
    }, [])

    useEffect(() => {
      console.log(starships);
    }, [starships])

    starships.map((starship, index) => {
      return(
        <div key={index}>
          <Link
            to={{'/starship'
            state: starship
          }}
            key={starship.name}
          >
              {{starship.name}}
          <Link />
        </div>
      )
    })
}

export default StarshipPage


