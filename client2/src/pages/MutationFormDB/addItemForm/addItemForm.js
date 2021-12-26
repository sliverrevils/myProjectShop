import React from "react";
import Input from "../../../component/Input/Input";
import classes from './addItemForm.module.css';

const AddForm=()=>{

    return(
        <div className={classes.AddMain}>
            <h1>Add new item</h1>
            <Input> Name</Input>
            <Input> Price</Input>
            <Input> Description</Input>
            <Input> Number</Input>
            <Input> Discount</Input>
            <Input> Picture link</Input>

        </div>
    )
};

export default AddForm;