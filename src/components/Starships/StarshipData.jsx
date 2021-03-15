const StarshipData = (props) => {

    const starshipData = props.location.props

    console.log(starshipData)


        return (
        
            <div className = "infoCard">

                <h1>{starshipData.name}</h1>
                <p>Class: {starshipData.starship_class}</p>
                <p>Model: {starshipData.model}</p>
                
            </div>
        )
  
}

export default StarshipData;