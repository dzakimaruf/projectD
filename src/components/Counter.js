import React, { Component } from 'react'

export default class Counter extends Component {
    state ={
        counter : 0
    }

    increment =()=>{
        this.setState({counter : this.state.counter+1})
    }

    decrement =()=>{
        this.setState({counter : this.state.counter-1})
    }

    render() {
        /* if (this.state.counter ===0){
            this.setState({counter : 9})
        } */
        
        return (
            <div>
              <h3>Counter : {this.state.counter}</h3>
              <button type='button' onClick={this.increment}>Increment (+) </button>
              <button type='button' onClick={this.decrement}>Decrement (-) </button>
            </div>
        )
    }
}