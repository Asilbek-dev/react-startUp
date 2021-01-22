import { Component } from 'react'
import {getFoods} from "../services/fakeFoods"
import Like from './like';
import "./todo.css";
import Pagination from './Pagination/pagination';
import {paginate} from "../utils/paginate.js";
import  ListGroup  from "./Pagination/list-group.jsx";
import {getCategories} from "../services/fakeCategories.js"

class Foods extends Component {
    state = { 
        foods: getFoods(),
        pageSize: 4,
        currentPage: 1,
        categories: getCategories(),
        number: 0,
    }

    handleDelete = (deletefoodID) => {
        let {foods} = this.state;
        foods = foods.filter(({_id}) => _id !== deletefoodID);
        this.setState({foods})
    }

    handleToggleLike = (likedItemID) => {
        const {foods} = this.state;
        const food =foods.find((food) => food._id === likedItemID);
        food.liked = food.liked ? false : true;

        this.setState({foods});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }

    render() { 
        const {foods,pageSize,currentPage,categories} = this.state;
        const { length : count } = foods;
        const paginatedItems = paginate(foods,currentPage, pageSize );
        return  count === 0 ? "Bizda mahsulot yo'q !!!" : ( 
            <main className = "container">
                <div className="row">
                    <div className="col-3 my-2">
                            <ListGroup items = {categories}/>
                    </div>
                    <div className="col">
                        <h4>Bizda {count } ta mahsulot bor !!!</h4>
                        <table className="table table-bordered text-center table-hover">
                            <thead className= "table-success"> 
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                    <th>Unit</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedItems.map( 
                                    ({_id,title, category: {name} ,price,amount,unit,liked})=> (
                                <tr key = {_id}>
                                    <td>{title}</td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{amount}</td>
                                    <td>{unit}</td>
                                    <td>
                                        <Like liked = {liked}  onToggleLike = {() => this.handleToggleLike(_id) }/>
                                        <button className="btn btn-danger btn-sm ml-2" onClick={() => this.handleDelete(_id)}>Delete</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination
                        countItems = {count}
                        pageSize = {pageSize}
                        currentPage = {currentPage}
                        onPageChange = {this.handlePageChange}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default Foods;