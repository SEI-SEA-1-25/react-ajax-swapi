const StarshipPage = (props) => {
  const ship = props.location.state
  console.log(ship);
  return (
    <div>
      <h3>{ship.name}</h3>
      <h4>{ship.model}</h4>
    </div>
  )
}

export default StarshipPage;