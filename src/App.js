/*import logo from './logo.svg';
import './App.css';

function App() {

  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { Component } from "react"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loading: false
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=52")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          items: res.results,
          loading: true
        })
      })
  }

  render() {
    var { items, loading } = this.state;
    if (!loading) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div className="container">
          <div className="tarjeta row justify-content-center d-flex align-items-center">
            {items.map(item => (
              <div className="userInfo col-lg-3">
                <div className="avatar-small justify-content-center d-flex align-items-center">
                  <img className="rounded-circle" src={item.picture.thumbnail} alt={item.name.first} />
                </div>
                <div className="userInfo row justify-content-center d-flex text-center">
                  <p>Nombre: {item.name.first} {item.name.last}</p>
                  <p>Ciudad: {item.location.city}</p>
                  <p>Nacionalidad: {item.nat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }
}
export default App;