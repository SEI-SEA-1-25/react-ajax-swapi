import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
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
          <Switch>

          <Route exact path="/starships" component={Starships} />
          {/* https://reactrouter.com/web/api/match */}
          <Route exact path="/starships/:ship" component={StarshipPage} />
          {/* <Route exact path="/starships/:ship" render={ ({location}) =>  <StarshipPage location={location}/> }  /> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
