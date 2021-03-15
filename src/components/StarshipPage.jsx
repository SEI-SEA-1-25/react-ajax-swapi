

const StarshipPage = props => {
    return (
        <div key={ props.location.state.starship }>
            <p>Name: {props.location.state.name}</p>
            <p>Model: {props.location.state.model}</p>
            <Link to='/'>RETURN</Link>
        </div>
    )
}

export default StarshipPage