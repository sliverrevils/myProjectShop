import React, { useEffect, useState } from "react";
import { basketCase } from "../Footer/Footer";
import classes from "./BasketCase.module.css";

const BasketCase=({getArr,globalState,setGlobalState})=>{

    const [arr,setArr]=useState([]); // STATE

    const loadLS=async()=>{         // LS ARR IN  GLOBAL STATE
       // const t=await getArr();
       // setArr(t);
       const tmpArr=await getArr();
       setGlobalState({footer:{...globalState.footer,basket:await getArr()}});
    }

    useEffect(()=>{
        loadLS();
      //  console.log("BASKET EFFECT",globalState);
    },[])

    return (
        <div className={classes.BasketCase}>
            {globalState.footer.basket.map((item,index)=>(
            <div key={item+'key'+index}>
                {item} 
                <button onClick={async()=>{await basketCase.delItem(item);loadLS()}}>x</button>
            </div>))}
        </div>

    )
}

export default BasketCase;