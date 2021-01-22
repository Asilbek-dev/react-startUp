


const handleCategory = (item) =>{
    if(item.name ==="Ichimlik"){
        paginatedItems.map( 
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
        ))
    }
}