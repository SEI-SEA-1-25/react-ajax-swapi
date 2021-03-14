import { Link } from 'react-router-dom'

function Starships (props) {
    return (
        <div className="starship-details">
            <h1>{props.name}</h1>
            <h1 id="abc">{props.model}</h1>
            <Link to={'/'} id="return">RETURN</Link>
        </div>
    )
}

export default Starships