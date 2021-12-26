import React, { useContext, useEffect } from "react";
import { FcInfo } from "react-icons/fc";
import { useData } from "../../context/mainContext";

const Info=()=>{   
     const {data,setValues}=useData();
     console.log(data);
     const arr=[1,2,3,4,5];
    return(
        <h2><div style={{background:"gray"}}> Info {FcInfo()}
        <button onClick={()=>setValues({info:arr})}>ADD TO CONTEXT</button>
        </div></h2>
    )

};

export default Info;