import { Link } from "react-router-dom";
export default function Starships(props) {
    console.log(props)
    return (
        <div>
            <header>STAR WARS STARSHIPS</header>
            {props.starships.map((starship, index) => (
                <div key={index}>
                    <Link to={{pathname: `/starship/${index}`, state: starship}}>{starship.name}</Link>
                </div>
            ))}
        </div> 
           
        
    )
}