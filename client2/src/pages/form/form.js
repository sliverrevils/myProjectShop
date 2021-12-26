import React from "react";
import Input from "../../component/Input/Input";
import classes from "./form.module.css";


const Form=()=>{

    return(
        <div className={classes.Form}>
          <Input name="Название" />
          <Input name="Цена" />
        </div>
    )
} 

export default Form;