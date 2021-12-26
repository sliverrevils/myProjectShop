import React from "react";
import classes from "./input.module.css";
console.log(classes);

const Input =({name,children})=>{

    const isValid=(event)=>{
        event.target.classList.add(classes.red);
        

    }

    return (
        <div className={classes.Input}>            
            <label htmlFor="name">
            {name} <input type="text" id="name" onInput={isValid} placeholder={children}/>
            </label>           
        </div>
    )
}

export default Input;