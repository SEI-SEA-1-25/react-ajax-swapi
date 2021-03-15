import { Link } from 'react-router-dom'
 
export default function StarshipButton(props) {
  return (
    // https://stackoverflow.com/questions/48084981/how-can-i-get-a-variable-from-the-path-in-react-router
    // https://reactrouter.com/web/api/Link
    <Link to={{
      pathname: `/starship-page/${props.ship.name}`,
      state: props.ship
    }}>
      <button>
        {props.ship.name}
      </button>
    </Link>
  )
}