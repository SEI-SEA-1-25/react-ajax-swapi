import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function StarshipPage(props) {
  console.log(props)
  const ship = props.location.state
  const [pilots, setPilots] = useState([])

  useEffect(() => {
    (async function getPilots() {
      const urls = ship.pilots

      let responses = urls.map(url => axios.get(url))

      responses = await Promise.all(responses)
      let responseData = []
      responses.forEach(response => responseData = [...responseData, response.data])

      setPilots(responseData)
    })()
  }, [])

  const renderPilots = pilots.map((pilot, index) => {
    return(
      <PilotList
        key={index}
        pilot={pilot}
      />
    ) 

  })

  return (
    <div>
      <h3>{ship.name}</h3>

      <p>Class: {ship.starship_class}</p>

      <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>

      <p>Manufacturer: {ship.manufacturer}</p>

      <h4>Pilots:</h4>
      {renderPilots}
      
      <Link to='/starships'>RETURN</Link>
    </div>
  )
}