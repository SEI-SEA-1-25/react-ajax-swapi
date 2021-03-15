import { Link } from "react-router-dom";
export default function Starships(props) {
    console.log(`these are props: ${props}`)
    return (
        <div>
            <header>STAR WARS STARSHIPS</header>
            {props.starships.map((starship, index) => (
                <div>
                    <Link key={index} to={`/starship/${index}`}>{starship.name}</Link>
                </div>
            ))}
        </div> 
           
        
    )
}