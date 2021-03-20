import React, { Component } from "react"
import './App.css';
import ReactDOM from 'react-dom';

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
        <div > Loading... </div>
      )
    } else {
      return (
        <div className="container" >
          <div className="row justify-content-center d-flex align-items-center" > {items.map(item => (<div className="col-lg-3" >
            <div className="user" >
              <div className="avatar justify-content-center d-flex align-items-center" >
                <img type="button" onClick={() => this.ShowData(item)} className="rounded-circle" src={item.picture.thumbnail} alt={item.name.first} />
              </div>
              <div className="userInfo row justify-content-center d-flex text-center" >
                <p> Name: {item.name.first} {item.name.last} </p>
                <p> City: {item.location.city} </p>
                <p> Nationality: {item.nat} </p>
              </div>
            </div>
          </div>
          ))
          } </div>
        </div>
      )
    }
  }
  ShowData = (item) => {
    ReactDOM.render(
      < React.StrictMode >
        <div className="container" >
          <div className="row justify-content-center d-flex align-items-center" >
            <div className="user" >
              <div className="avatar justify-content-center d-flex align-items-center" >
                <img className="rounded-circle" src={item.picture.large} alt={item.name.first} />
              </div>
              <div className="userInfo row justify-content-center d-flex text-center" >
                <p> Name: {item.name.first} {item.name.last} </p>
                <p> Username: {item.login.username} </p>
                <p> Email adress: {item.email} </p>
              </div>
            </div>
          </div>
        </div>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
}

export default App;