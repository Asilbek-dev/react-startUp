import React, { Component } from 'react'

class Beginner extends Component {
    state = { 
        count: 0,
    }

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    getbadgeClass() {
        let className = "badge badge-lg m-2 p-2 ";
        className += this.state.count === 0 ? "bg-warning" : "bg-danger";
        return className;
    }
    handleIncrement = () => {
        this.setState ({
            count:this.state.count + 1,
        })
    }
    handleDecrement = () => {
        this.setState ({
            count:this.state.count - 1,
        })
    }


    render() { 
            return ( 
            <>
               <span className={this.getbadgeClass()}>{this.formatNamber()}</span>
               <button onClick = {this.handleIncrement} className = "bg-primary btn mr-2">Increment</button> 
               <button onClick = {this.handleDecrement} className = "bg-danger btn">Decrement</button> 
            </>
         );
    }

    formatNamber(){
        const {count} = this.state
        return count === 0 ? "zero" : count;
    }
}
 
export default Beginner;