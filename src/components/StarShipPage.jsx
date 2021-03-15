//Set-Up//
import { useParams } from "react-router-dom";

const StarShipPage = ({ ships }) => {
  const { starShipId } = useParams();

  const currentShip = ships[starShipId];
  // console.log(currentShip.name);
  return (
    <div>
      <h1>{currentShip.name}</h1>
      <h3>Model: {currentShip.model}</h3>
      <h3>Manufacturer: {currentShip.manufacturer}</h3>
      <h3>Crew: {currentShip.crew}</h3>
      <h3>Hyper Drive Rating: {currentShip.hyperdrive_rating}</h3>
    </div>
  );
};

export default StarShipPage;
