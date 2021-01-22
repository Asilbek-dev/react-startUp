import icons from "./icons.json";


const Icon = ({width=50, height=50,name="test",color="#000"}) => {
    const {path, viewBox} = icons[name];
    return ( 
        <svg width={width} height={height} viewBox={viewBox} path={path}>
            <path d={path} fill={color}/>
        </svg>
     );
}
 
export default Icon;