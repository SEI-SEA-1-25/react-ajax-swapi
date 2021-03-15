import { Link } from 'react-router-dom'

const Home = () => {

    
    return (

        <div className = "home">
       
       

            <Link to="/starships"> STARSHIPS </Link>
            <Link to="/people"> PEOPLE</Link>
            <Link to="/planets"> PLANETS </Link>
    
        

        </div>
    )
}

export default Home;