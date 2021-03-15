import { Link } from 'react-router-dom'
 
export default function StarshipButton(props) {

  // turn sapces into underscores
  const namePath = props.ship.name.split(' ').join('_')

  return (
    // https://stackoverflow.com/questions/48084981/how-can-i-get-a-variable-from-the-path-in-react-router
    // https://reactrouter.com/web/api/Link
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