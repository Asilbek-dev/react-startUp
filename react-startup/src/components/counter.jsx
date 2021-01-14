import React, { Component } from 'react'
import { Modal, Button } from 'antd';

class Counter extends Component {
    constructor () {
        super();
        this.state = {
            todo: "",
            todos: [],
            id: 1,
            complete: false,
            loading: false,
            visible: false,
        };
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    handleInputChange = (e) => {
       this.setState(
        {todo: e.target.value} 
       )
    }
    addTodo = () =>{
        if (this.state.todo !== ""){
            let todo = {
                todo: this.state.todo,
                id: this.state.id,
            }
            this.setState({
                todos: this.state.todos.concat(todo),
                id: this.state.id + 1,
                todo: " "
            })
        }
        else {
            alert("yo'q")
        }
    }
    deleteTodo = (index) =>{
        this.setState({
            todos: this.state.todos.filter((item) =>{
                if(item.id !== index)
                return item
            })
        })
    }
    onclickCheck = (id) => {
        this.setState({
            todos: this.state.todos.filter((item)=>{
                if (item.id === id)
                    item.complete =! item.complete
                    return item
            })
        })
    }
    render() { 
        const { visible, loading } = this.state;
        return(  
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8 d-flex justify-content-between">
                        <input type="text" placeholder="Ma'lumot kiriting..." value={this.state.todo} className="form-control border-0" onChange={this.handleInputChange}/>
                        <button type="button" className="btn bg-danger text-white ml-3" onClick={this.addTodo}>Add</button>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8 justify-content-between">
                    {this.state.todos.map((item) => {
                        var a = <div className="col-6"><div className="box">{item.todo}</div></div>
                        var b = <div className="col-6"><div className="box box2">{item.todo}</div></div>
                        return <div className="row d-flex justify-content-start mt-3">
                            <div className="col-2"><div className="bg-dark"><p>{item.id}</p></div>
                            </div>
                            {item.complete ? b : a}
                            <div className="col-4 d-flex">
                                <div className="bg-dark" onClick={() => this.onclickCheck(item.id)}><p><i className="fas fa-check"></i></p></div>
                                <div className="bg-dark" onClick={this.showModal}><p><i className="fas fa-pen-nib"></i></p></div>
                                <Modal
                                    visible={visible}
                                    title="Title"
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    footer={[
                                    <Button key="back" onClick={this.handleCancel}>
                                        Cancel
                                    </Button>,
                                    <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                        Ok
                                    </Button>,
                                    ]}
                                    >
                                    <p>06:00 da uyg'on!!!</p>
                                </Modal>
                                <div className="bg-dark" onClick={() => this.deleteTodo(item.id)}><p><i className="fas fa-times"></i></p></div>
                            </div>
                        </div>
                    })}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Counter;

