import React, { Component } from "react"
import './App.css';
import Header from './header/header';
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
        <div className="container cuerpo" >
          <div className="row justify-content-center d-flex align-items-center" > {items.map(item => (<div className="col-lg-3 col-md-4 col-sm-6" >
            <div className="users" >
              <div className="avatar justify-content-center d-flex align-items-center" >
                <img type="button" onClick={() => this.showData(item, items)} className="rounded-circle" src={item.picture.thumbnail} alt={item.name.first} />
              </div>
              <div className="userInfo row justify-content-center d-flex text-center" >
                <p>Name: {item.name.first} {item.name.last} </p>
                <p>City: {item.location.city} </p>
                <p>Nationality: {item.nat} </p>
              </div>
            </div>
          </div>
          ))
          } </div>
        </div>
      )
    }
  }

  showData = (item, items) => {
    ReactDOM.render(
      <React.StrictMode>
      <Header/>
        <div className="container">
          <div className="row justify-content-center d-flex" >
            <div className="profile" >
              <div className="avatar justify-content-center d-flex align-items-center" >
                <img className="rounded-circle" src={item.picture.large} alt={item.name.first} />
              </div>
              <div>
                <p>Name: {item.name.first} {item.name.last} </p>
                <p>Age: {item.dob.age} </p>
                <p>City: {item.location.city} </p>
                <p>Nationality: {item.nat} </p>
                <p>Postcode: {item.location.postcode} </p>
                <p>Username: {item.login.username} </p>
                <p>Email adress: {item.email} </p>
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