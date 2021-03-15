export default function StarshipPage(props) {
    return (
        <div key ={props.location.state.starship}>
            <h1>Name: {props.location.state.name} </h1>
            <h2>Model: {props.location.state.model}</h2>
        </div>
    )
    
}