import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.reset = this.reset.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '40vh' }}>
        <h1>{ this.state.count }</h1>
        <Fab color="primary" style={{ margin: '8px' }} onClick={ this.increment }><AddIcon /></Fab>
        <Fab color="primary" style={{ margin: '8px' }} onClick={ this.decrement }><RemoveIcon /></Fab>
        <br></br>
        <Button variant="contained" color="primary" onClick={ this.reset }>reset</Button>
      </div>
    )
  }

  reset() {
    this.setState({
      count: 0
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default Home
