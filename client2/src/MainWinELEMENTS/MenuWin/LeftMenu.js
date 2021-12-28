import React from "react";
import { useGlobalContext } from "../../HOC/Layout/Layout";
import classes from "./LeftMenu.module.css";

const LeftMenu=()=>{
    const {globalState,setGlobalState}=useGlobalContext();
    const styleArr=[];
    styleArr.push(classes.LeftMenu);

    globalState.leftMenu?styleArr.push(classes.LeftMenuOpen):styleArr.push(classes.LeftMenuClose)

    let a=30,b=40;
    console.log(a+b);
    
    return(
        <div className={styleArr.join(" ")} >
            <div className={classes.menuToggle_btn} onClick={()=>{setGlobalState({leftMenu:!globalState.leftMenu})}}>
            {globalState.leftMenu?"X":">>"}
            </div>

                <ul>
                    <li>Menu1</li>
                    <li>Menu2</li>
                    <li>Menu3</li>
                    <li>Menu4</li>
                    <li>Menu5</li>
                    <li>Menu6</li>
                </ul>
        </div>
    )
}

export default LeftMenu;