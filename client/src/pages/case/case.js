import React, { useEffect, useState } from "react";
import { FcFinePrint } from "react-icons/fc";
import {useParams} from 'react-router-dom';

const Case=props=>{
    const {id}=useParams();
    const [item,setItem]=useState({});
    
    useEffect(()=>{
        fetch('http://localhost:4000/items',{
            method:"Post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body:JSON.stringify({
                query:` {
                    findById(id:"${id}"){
                      id
                      name
                      description
                      number
                      picture
                      price
                      discount
                    }
                  }`
            })
        }).then(res=>res.json()).then(data=>{
            // console.log('DATA',data);
            setItem(data.data.findById)});
        //  console.log('ITEM',item);
        //console.log(items.data.allItems)
     },[])
    
    return(
        <div>
            <h2><div style={{background:"gray"}}> Case {FcFinePrint()} id:{id}</div></h2>
                  <h3>name: {item.name}</h3>
                   <h5>price:{item.price}$</h5>
                   <h5>description:{item.description}</h5>
                   <h5>number:{item.number}</h5>   

                   <h5>discount:{item.discount}</h5>   
                   <h5>picture:{item.picture}</h5>   
            
        </div>
        
    )
};

export default Case;