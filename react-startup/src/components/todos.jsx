import React, { Component } from 'react'


class Todos extends Component {
    
    render() { 
        const {tasks} = this.props
        return ( 
            <ul>
                {tasks.map(({time_input,task_input},index) => (
                    <li key={index}>
                        <span className="mx-2 border btn">{index + 1}</span>
                        <span className="mx-2 border btn">{task_input}</span>
                        <span className="mx-2 border btn">{time_input}</span>
                        {this.props.name}
                    </li>
                ))}
            </ul>
         );
    }
}
 
export default Todos;