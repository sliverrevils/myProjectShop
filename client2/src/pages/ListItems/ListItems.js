import React, { useEffect, useState } from "react";
import { sendQuery } from "../../DB/queriesFuncs";
import { QUERYES } from "../../DB/queryesObj";
import { useGlobalContext } from "../../HOC/Layout/Layout";
import { useToggle } from "../../Hooks/Hooks";
import { basketCase } from "../../MainWinELEMENTS/Footer/Footer";
import AddForm from "../MutationFormDB/addItemForm/addItemForm";
import classes from './ListItems.module.css';

const ListItems= ()=>{   
    
                             
                                        // LOCAL STATE
     const [arr,setArr]=useState([]);
    
                                        // SHOW ALL ITEMS & SET STATE
    const showDB_setState=async()=>{ 
        const tmpArr= await sendQuery(QUERYES.allItems).then(data=>data);
        setArr(tmpArr);        
    }
                                        // DELETE
    const delItem=async id=>{           
        const successfulDelete= await sendQuery(QUERYES.delItem(id)).then(data=>data);
        //console.log(successfulDelete);
        showDB_setState();// for update render
    }
                                        // ADD
    const addItem=async(name,description,number,price,picture,discount)=>{ 
        const successfulAdd=await sendQuery(QUERYES.addItem(name,description,number,price,picture,discount)).then(data=>data);
        //console.log(successfulAdd);
        showDB_setState();



    }
                                        //ADD BTN TOGGLE
    const [addBtn,setAddBtn]=useToggle(false);


                                        // USE GLOBAL STATE  
    const {globalState,setGlobalState}=useGlobalContext();



    useEffect(()=>{
        showDB_setState();
    },[]); //                   !! ОБЯЗАТЕЛЬНО [] (ИНАЧЕ БУДЕТ ЦИКЛИТЬ )

    return(
        <div className={classes.ListItems}>
            {globalState.footer.addDelBlock||<p><button style={{background:"blue"}} onClick={()=>{setGlobalState({footer:{...globalState.footer,addDelBlock:true}})}}>Show basket (Add / Del) menu </button></p>}

            <button onClick={setAddBtn}>Add</button>
            {addBtn&&AddForm()}

            <p>Items list</p>

            <button className={classes.addItem_btn} onClick={()=>{addItem()}}> add test item</button>
            {arr.map((item,index)=>(
            <p key={item.id+index}>{index+1}
             : 
             {item.id} 
             <button onClick={()=>{basketCase.addItem(item.id);setGlobalState({footer:{basket:basketCase.getArr()}}) }}>To Basket</button>

            <button className={classes.del} onClick={()=>{delItem(item.id)}}>Del from DB</button></p>
            ))};
        </div>
    )
}

export default ListItems;