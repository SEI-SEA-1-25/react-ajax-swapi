import { Link } from 'react-router-dom'
 
export default function StarshipButton(props) {
  return (
    // https://reactrouter.com/web/api/Link
    <Link to={{
      pathname: `/starship-show/${props.ship.name}`,
      state: props.ship
    }}>
      <button>
        {props.ship.name}
      </button>
    </Link>
  )
}