import { Link } from 'react-router-dom'

const StarshipPage = (props) => {

    return (
        <div key={props.location.state.starship}>
            <h4>Name: {props.location.state.name}</h4>
            <h4>Model: {props.location.state.model}</h4>
            <Link 
                to='/starships'
            >RETURN</Link>
        </div>
    )
}

export default StarshipPage