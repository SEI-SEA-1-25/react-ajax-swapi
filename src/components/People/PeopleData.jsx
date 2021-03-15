const PeopleData = (props) => {

    const peopleData = props.location.props

    console.log(peopleData)


        return (
        
            <div className = "infoCard">

                <h1>{peopleData.name}</h1>
                <p>Hair Color: {peopleData.hair_color}</p>
                <p>Eye Color: {peopleData.eye_color}</p>
                
            </div>
        )
  
}

export default PeopleData;