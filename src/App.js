import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Starships from './components/Starships'
import StarshipPage from './components/StarshipPage'
import './App.css';

function App() {
  return (
    <div>
      <Router >
        <header>
          <h2>SWAPI</h2>

        <nav>
          <Link className="App-link" to="/starships">Starships</Link>
        </nav>
        </header>

        <main className="App">
          <Route path="/starships" component={Starships} />
          {/* https://reactrouter.com/web/api/match */}
          <Route exact path="/starship-page/:ship" render={ ({location}) =>  <StarshipPage location={location}/> }  />
          {/* will work, banking default behavior */}
          {/* <Route exact path="/starships/:ship"  component={StarshipPage} /> */}
        </main>
      </Router>
    </div>
  );
}

export default App;
