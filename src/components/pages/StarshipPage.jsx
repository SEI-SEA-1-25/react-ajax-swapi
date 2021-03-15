export default function StarshipPage(props) {
    return (
        <div>
            <h1>Name: {props.starship.name} </h1>
            <h2>Model: {props.starship.model}</h2>
        </div>
    )
    
}