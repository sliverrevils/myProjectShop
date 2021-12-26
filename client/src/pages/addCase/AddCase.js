import React, { useState } from "react";
import { FcApproval, FcCancel} from "react-icons/fc";

const AddCase = props => {
    
    const [valid, setValid] = useState({        
        name: false,
        description: false,
        number: false,
        price: false,
        picture: false,
        discount: false,    
}); 
    const add = async () => {
        await fetch('http://localhost:4000/items', {
            method: "Post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(
                {
                    query: `mutation{
                    addItem (item:{
                      name:"${valid.name}" 
                      description:"${valid.description}"
                      number:${parseInt(valid.number)}
                      price:${parseInt(valid.price)}
                      picture:"${valid.picture}" 
                      discount:${parseInt(valid.discount)}
                      }){
                        id
                        name
                        description
                        number
                        picture
                        discount
                      }
                  }`
                }
            )
        })
    }

    const isValid = event => {
       // console.log(event.target.value.trim());
        //event.target.value=(event.target.placeholder=="Name")&&event.target.value.trim();
        (event.target.placeholder=="Description")||( event.target.value = event.target.value.trim());
        setValid({...valid,[event.target.placeholder.toLowerCase()]:event.target.value});
        //console.log("VAILD",valid);
    }

    const isValidForm=()=>{        
        for(let field in valid){            
            if(!valid[field]){                
                return false;
            };           
        }
        console.log("VALID",valid);
        return true;

    }

    return (
        <div style={{ display: "flex", flexDirection: "column", width: 300, justifyContent: "center", alignItems: "center" ,border:"1px solid gray"}}>
            
            <div><input type="text" placeholder="Name" onInput={isValid} />{valid.name?FcApproval():FcCancel()} </div>
            <div><input type="text" placeholder="Description" onInput={isValid} />{valid.description?FcApproval():FcCancel()} </div>
            <div><input type="number" placeholder="Number" onInput={isValid} />{valid.number?FcApproval():FcCancel()} </div>
            <div><input type="text" placeholder="Picture" onInput={isValid} />{valid.picture?FcApproval():FcCancel()} </div>
            <div><input type="number" placeholder="Price"onInput={isValid}  />{valid.price?FcApproval():FcCancel()} </div>
            <div><input type="number" placeholder="Discount" onInput={isValid}  />{valid.discount?FcApproval():FcCancel()} </div>
            <button onClick={add} disabled={!isValidForm()}>ADD</button>
            {/* <button onClick={isValidForm}>check</button> */}
        </div>
    )
}

export { AddCase };