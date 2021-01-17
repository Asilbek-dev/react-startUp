import React, { Component } from 'react';
import Beginner from './beginner';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 3},
            {id: 2, value: 2},
            {id: 3, value: 4},
            {id: 4, value: 1},
        ]
     }
    render() { 
        const {counters} = this.state;
        return ( 
            <>
                {counters.map((beginner) => (
                    <Beginner key = {beginner.id} value = {beginner.value}/>
                ))}
            </>
         );
    }
}
 
export default Counters;