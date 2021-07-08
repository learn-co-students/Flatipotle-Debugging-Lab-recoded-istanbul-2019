import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  addOrder = (order) => {
    console.log(order)
    this.setState({
      orders: this.state.orders.concat(order)
    })
  }

  render() {
    const orders = this.state.orders.map( (order, idx) => {
      <Order key={idx} {...order} />
    })
    console.log(this.state.orders)
    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder} />

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            {this.state.orders.map((order, index) => {
              return (
                <div>
                  <h3>Order {index + 1}</h3>
                  <ul>
                    <li>Protein: {order.protein.join(', ')}</li>
                    <li>Fillings: {order.fillings.join(', ')}</li>
                    <li>Toppings: {order.toppings.join(', ')}</li>
                    <li>Sides: {order.sides.join(', ')}</li>
                  </ul>
                </div>
            )})}
          </div>
        </div>
      </div>
    )
  }
}

export default App
