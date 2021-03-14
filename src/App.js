import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Starships from './components/Starships'
import StarshipShow from './components/StarshipShow'
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
          <Route exact path="/starship-show/:ship" component={StarshipShow} />
        </main>
      </Router>
    </div>
  );
}

export default App;
