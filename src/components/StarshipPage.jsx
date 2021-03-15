export default function StarshipPage(props) {
  const ship = props.location.state
  console.log(props.location.state)
  return (
    <div>
      <h3>{ship.name}</h3>
      hello from the starship page
    </div>
  )
}