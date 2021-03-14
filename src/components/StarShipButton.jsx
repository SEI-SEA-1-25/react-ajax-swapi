import { Link } from 'react-router-dom'
 
export default function StarshipButton(props) {
  return (
    <Link to={{
      pathname: '/starship-show',
      // state: 
    }}>
      <button>
        starship name
      </button>
    </Link>
  )
}