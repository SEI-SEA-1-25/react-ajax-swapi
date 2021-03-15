import { Link } from 'react-router-dom'
 
export default function StarshipButton(props) {

  // turn sapces into underscores
  const namePath = props.ship.name.split(' ').join('_')

  return (
    <Link to={{
      pathname: `/starships/${namePath}`,
      state: props.ship
    }}>
      <button>
        {props.ship.name}
      </button>
    </Link>
  )
}