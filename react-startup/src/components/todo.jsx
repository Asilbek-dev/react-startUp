import React, { Component,Fragment } from 'react';
import Icon from './icon';
import Todos from './todos';
// import Todos from 'todos';

const inputs = [
    {id: "task", name:"task_input", label: "Task Enter", count: ""},
    {id: "time", name:"time_input", label: "Time Enter"},
]

class Todo extends Component {
    state = { 
        tasks: [],
        task_input: "",
        time_input: "",
        count: ""
        
    }

    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({ [name]: value});
        console.log(e.target.value);
    };
    
    handleAdd = () =>{
        const {tasks,task_input,time_input,count} = this.state;
        const task = {task_input,time_input,count};
        if(task_input.trim() !== "" && time_input !== "")
        count ++
        tasks.push(task);
        this.setState({tasks,task_input:"",time_input:"",count});
    };
    render() { 
        const {handleChange,handleAdd} = this;
        const {tasks} = this.state;
        return ( 
            <div className="col-md-3">
                <h4>Todo apps</h4>
                {inputs.map(({id, name,label,count}) => (
                <Fragment key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input id={id} onChange={ handleChange } value = {this.state[name]} name = { name } className="form-control"/>
                    <h1>{count}</h1>
                    <br/>
                </Fragment>
                ))}
              
                
                <button className="btn-success btn" onClick={ handleAdd }>Add</button>
                <br/>
                <br/>
              <Todos tasks={ tasks } name="Sherzodbek"/>

                    <Icon/>

            </div>
         );
    }
}
 
export default Todo;