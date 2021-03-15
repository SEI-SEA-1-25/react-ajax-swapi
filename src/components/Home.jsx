import { Link } from 'react-router-dom'

const Home = () => {

    
    return (

        <div className = "home">
       
            <div className= "homeLinksDiv">
                <Link className="Links"  to="/starships"> STARSHIPS </Link>
            </div>

            <div className= "homeLinksDiv">
                <Link className ="Links" to="/planets"> PLANETS </Link>
            </div>
        
            <div className= "homeLinksDiv">
                <Link className ="Links" to="/people"> PEOPLE</Link>
            </div>
        

        </div>
    )
}

export default Home;