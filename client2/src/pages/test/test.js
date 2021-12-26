import React, { useContext, useEffect } from "react";
import { useGlobalContext } from "../../HOC/Layout/Layout";
import classes from "./test.module.css";



const Test=()=>{
    const {globalState,setGlobalState}=useGlobalContext();
    
    
    //useEffect(()=>setGlobalState({test:"SET GLOBAL TEST"}));

    return(
        <div className={classes.Test} onClick={()=>setGlobalState(globalState.test!="CLICKED"?{test:"CLICKED"}:{test:"False"})}>
                <h1>TEST</h1> - {globalState.test}
        </div>
    )
}

export default Test;