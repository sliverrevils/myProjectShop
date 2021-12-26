import { useEffect, useState } from "react";

function useLocalStorage(key,initVal=[]){
    
    const getVal=()=>{
                        //                  CHEKING DATA ON LS (return data || ititVal)
        const storage=localStorage.getItem(key); 
        if(storage){
            return JSON.parse(storage);//parse from string
        }
        return initVal;
    }

                        //                  STATE
    const [value,setValue]=useState(getVal);

                        //                  UPDATING LS ON CHANGING STATE DATA
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));// LS ->obj(key,val)
        console.log("LS UPDATED")
    },[value]);


    return [value,setValue];
}

export {useLocalStorage};
