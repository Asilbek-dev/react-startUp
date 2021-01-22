import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
const like = ({liked, onToggleLike}) => {
    const Icon = liked ? AiFillHeart : AiOutlineHeart;
    return (
        <Icon
        size = '2rem' color = '#ff2525' onClick={onToggleLike} className = "like-icon"
        />
    ); 
};
export default like;