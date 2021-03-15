import { Link } from 'react-router-dom'
// import { axios } from 'axios'
import { useState, useEffect } from 'react'

function Starships (props) {
    // console.log(props.location.state);
    const starship = props.location
    // console.log(ship.location.state);
    const [star, setStar] = useState([])

    useEffect(() => {
        setStar(starship.location.state)
    }, [])

    
    return (
        <div className="starship-details">
            <h1>Name: {star.name}</h1>
            <h1 id="abc">Model: {star.model}</h1>
            <Link to={'/'} id="return">RETURN</Link>
        </div>
    )
}

export default Starships