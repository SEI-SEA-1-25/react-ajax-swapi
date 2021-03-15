//SET-UP//
// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StarShips = ({ ships }) => {
  return (
    <>
      <h1>Star Ships:</h1>
      {ships.map((ship, idx) => {
        return (
          <ul key={ship.name}>
            <Link to={`/star-ships/${idx}`} className="ship-links">
              {ship.name}
            </Link>
          </ul>
        );
      })}
    </>
  );
};
export default StarShips;
