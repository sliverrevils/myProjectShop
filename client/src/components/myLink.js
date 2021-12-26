import {NavLink} from 'react-router-dom';
import { useMatch } from 'react-router';

const MyLink=({children,to,...props})=>{
const match=useMatch(to);
const {
    pathname:$PATH="NO DATA",
    ...otherProps
}=match||{};
// console.log("useMatch",{match});
// console.log("$PATH = ",$PATH);
// console.log("otherProps = ",otherProps);
    return(
        <NavLink
            to={to}
            {...props}
            style={{
                color: match ? 'pink' : 'white'
            }}>
            {children}
        </NavLink>
    )
}
export {MyLink};