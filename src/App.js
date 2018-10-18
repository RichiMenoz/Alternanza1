import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 4 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 4 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={this.IncrementItem}>Clicca per incrementare di 4</button>
            <button onClick={this.DecreaseItem}>Clicca per decrementare di 4</button>
            <button onClick={this.ToggleClick}>
              { this.state.show ? 'Nascondi il numero' : 'Mostra il numero' }
            </button>
            { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
