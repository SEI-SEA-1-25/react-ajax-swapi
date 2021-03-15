import { Link } from 'react-router-dom'

export default function StarshipButton(props) {
  return (
    <div>
      <Link to={{
        pathname: `/starships/${props.ship.name}`,
        state: props.ship
      }}>
        <button>
          {props.ship.name}
        </button>
      </Link>
    </div>
  )
}