import { Link } from 'react-router-dom'

export default function StarshipPage(props) {
  const ship = props.location.state
  return (
    <div>
      <h3>{ship.name}</h3>

      <p>Class: {ship.starship_class}</p>

      <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>

      <p>Manufacturer: {ship.manufacturer}</p>

      <Link to='/starships'>RETURN</Link>
    </div>
  )
}