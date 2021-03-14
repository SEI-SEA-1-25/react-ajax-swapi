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
          <Link to={`/star-ships/${idx}`} key={ship.name}>
            {ship.name}
          </Link>
        );
      })}
    </>
  );
};
export default StarShips;
