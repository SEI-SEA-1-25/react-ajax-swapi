import { Component } from 'react'
import './App.css';

export default class App extends Component {
  state = {
    loading: true,
    ship: null
  };

  async componentDidMount() {
    const url = "https://swapi.dev/api/starships/"
    const response = await fetch(url);
    const data = await response.json()
    this.setState({ ship: data.results[0], loading: false })
  }


  render() {
    return (
      <div>
        {this.state.loading || !this.state.ship ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.ship.name}
          </div>
        )}
      </div>
    )
  }
}