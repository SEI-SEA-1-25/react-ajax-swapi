import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import StarshipPage from './components/pages/StarshipPage';
import Starships from './components/Starships';

function App() {
  const [starships, setStarships] = useState([])
  useEffect(() => {
    const getStarships = async () => {
      const response = await fetch('https://swapi.dev/api/starships/')
      const json = await response.json()
      const starshipsData = json.results
      setStarships(starshipsData)
      console.log(starshipsData)
    }
    // if (!starships) {
    //   getStarships()
    // }
    getStarships()
  }, [])
  
  return (
    <Router>
      <div className="App">

        {/* <Route exact path='/' component={Starships} /> */}
        <Route 
          path="/starship"
          render= {({location}) => <StarshipPage location={location}/> }
          
        />
     
        <Starships starships={starships}/>
        
      </div>

    </Router>
  );
}

export default App;
