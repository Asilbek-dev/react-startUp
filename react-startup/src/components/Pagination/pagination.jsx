import _ from 'lodash';
import "./main.css";

const Pagination = ({onPageChange,pageSize,currentPage,countItems}) => {

    const pageCount = countItems / pageSize;
    if (pageCount < 1) return null;
    const pages = _.range(1,pageCount + 1);

    return ( 
        <ul className="pagination">
            {pages.map((page) => ( 
            <li 
            className= {"page-item " + (currentPage === page && "active" )} 
            key = {page}>
                <a href="#1" className="page-link" onClick={() => onPageChange(page)}>
                    {page}
                </a>
            </li>
            ))}
        </ul>
    );
}

export default Pagination;