import React, {useEffect, useState } from 'react';

//Declaring Variables
const Ship_API = 'https://swapi.dev/api/starships/';


function Starship(props) {
    const [ship, setShip ] = useState([]);

    useEffect(() => {
        fetch(Ship_API)
            .then((res)=> res.json())
            .then((data) => {
                setShip(data.results);
            });
        });

    return(
        <div>
            {ship.map((ele)=> {
                console.log(ele.name)
            })}
        </div>
    );
}

export default Starship;