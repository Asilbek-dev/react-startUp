import categories from "../../services/fakeCategories.js"
import "./main.css";
const ListGroup = ({items}) =>{
    return <ul className="list-group">
        <span className="badge badge-info p-2 my-2">Categories</span>
        {items.map(item => <li key={item._id} className="list-group-item" >{item.name}
        <span className = "badge badge-warning ml-3">2</span>
        </li>)}
    </ul>
    
    
};
// for (let i = 0; i < categories._id; i++) {
//     if(categories.name === "Ichimlik")
//     num++;
    
// }
// console.log(num);

export default ListGroup