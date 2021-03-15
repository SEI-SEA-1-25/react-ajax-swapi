const planetData = (props) => {

    const planetData = props.location.props

    console.log(planetData)


        return (
        
            <div className = "infoCard">

                <h1>{planetData.name}</h1>
                <p>Rotation: {planetData.rotation_period}</p>
                <p>Orbit: {planetData.orbital_period}</p>
                <p>diameter: {planetData.diameter}</p>
                <p>climate: {planetData.climate}</p>
                
            </div>
        )
  
}

export default planetData;