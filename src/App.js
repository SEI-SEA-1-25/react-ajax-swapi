//SET-UP//
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";

//Route-Imports//
import StarShips from "./components/StarShips";
import Home from "./components/Home";
import StarShipPage from "./components/StarShipPage";
import axios from "axios";

//vars//
const STAR_WARS_URL = "https://swapi.dev/api/starships/";

function App() {
  const [ships, setShips] = useState([]);

  //fetch api data//
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(STAR_WARS_URL);
      //   console.log(response.data);
      setShips(response.data.results);
    };
    fetchData();
  }, []);
  //   console.log(ships);
  if (ships.length === 0) {
    return <div></div>;
  }
  return (
    <div>
      <h1>Star Wars React Deliverable</h1>

      <BrowserRouter>
        <div className="container">
          <Link to="/star-ships" className="links">
            &emsp; Star Ships &emsp;|&emsp;
          </Link>
          <Link to="/" className="links">
            Home &emsp;
          </Link>

          <Switch>
            <Route path="/star-ships" exact={true}>
              <StarShips ships={ships} />
            </Route>

            <Route path="/" component={Home} exact={true} />

            <Route path="/star-ships/:starShipId">
              <StarShipPage ships={ships} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
