import React, { useEffect, useState } from "react";

import { useLocalStorage } from "../../Hooks/useLocalStorage";
import BasketCase from "../BasketCase/BasketCase";
import classes from "./footer.module.css";



export const basketCase = {    // OBJ WITH FUNCS USE LS myHOOK 

    // GET ALL-ITEMS OF LS : ARRAY
    getArr: function () { 
        return JSON.parse(localStorage.getItem('basketCase')) 
    },
    // ADD ITEM - FUNC
    addItem: async function (element) {
        let arr = await this.getArr();
        element && arr.push(element);
        localStorage.setItem("basketCase", JSON.stringify(arr));
        console.log("ADD TO LS : ", arr);

    },
    // DEL ITEM - FUNC
    delItem: async function (element) {
        let arr = await this.getArr();
        let index = arr.findIndex(el => el == element);
        if (index >= 0) {
            let res = arr.splice(index, 1)[0];
            console.log("DEL FROM LS :", arr, '|', " RESULT : ", res);
            localStorage.setItem('basketCase', JSON.stringify(arr));
        }
    },
    // CLEAR LS - FUNC 
    clearBC: function () {
        localStorage.clear();
        localStorage.setItem("basketCase",'[]');
    }
}

// <FOOTER> 


const Footer = ({globalState,setGlobalState}) => { //DESTRUCT GLOBAL STATE
   
    console.dir(globalState);
    const [value, setValue] = useLocalStorage("basketCase"); // STATE of LS - myHOOK 
    console.log("LS :", value);
    const [add, setAdd] = useState(); // input value to add item
    const [del, setDel] = useState(); // input of del item 

useEffect(()=>{
    setGlobalState({new:"Nik"});
},[]);
console.log("GS",globalState);
    return value && (
        <div className={classes.FooterMain}>
                                            {/* ?? - ? */}
            {globalState.footer.addDelBlock&&<div className={classes.Control}>          
                <input type="text" onInput={event => setAdd(event.target.value)} /> <button onClick={() => basketCase.addItem(add) && setAdd(null)}> Add </button>
                <input type="text" onInput={event => setDel(event.target.value)} />  <button onClick={() => basketCase.delItem(del)}> Del </button>
                <button onClick={basketCase.clearBC} attr="clear">Clear</button>
                <div className={classes.close} onClick={()=>setGlobalState({footer:{...globalState.footer,addDelBlock:false}})}>X</div>
            </div>
            }
            

            <div>
                <BasketCase {...{...basketCase,globalState,setGlobalState}} />
            </div>

        </div>
    )
}

export default Footer;