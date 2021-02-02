const Icon = ({width,path,height,color,viewBox}) => {
    return ( 
        <>
            <svg width = {width} height = {height} viewBox = {viewBox}>
                <path d={path} fill = {color}/>
            </svg>
            <svg>
                width = {width}
                height = {height}
                <path fill="currentColor" fill-rule="evenodd" d=''></path>
            </svg>
        </>
    );
}
 
export default Icon;