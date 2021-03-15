import { Link } from 'react-router-dom'

const StarshipButton = (props) => {
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

export default StarshipButton;