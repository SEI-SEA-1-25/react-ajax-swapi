import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Starships from "./components/Starships"
import StarshipPage from "./components/StarshipPage"

function App() {
  return (
    <div>
      <Router>
        <header>
          <h2>Swapi</h2>
          <nav>
            <Link className="App-link" to="/starships">Starship</Link>
          </nav>
        </header>
        <main className="App">
          <Switch>
            <Route exact path="/starships" component={Starships} />

            <Route exact path="starships/:ship" component={StarshipPage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
