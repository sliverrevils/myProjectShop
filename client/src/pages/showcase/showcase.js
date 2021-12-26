import React, {  useEffect, useState } from "react";
import { FcList } from "react-icons/fc";
import {  useParams } from "react-router";
import { Link } from "react-router-dom";
import "./showcase.css";



                       
const Showcase = props => {
    const {id}=useParams();
    const [items,setItems]=useState([]);
    
    useEffect(() => {

        //                           GETTING ITEMS FROM DB
        fetch('http://localhost:4000/items',
            {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: ` {
                    allItems {
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
            }).then(res => res.json()).then(data => setItems(data.data.allItems));


    }, []);



                                                 //DELETE FROM DB FUNCTION
     const delItem=async event=>{
          event.preventDefault();
        //          delete from DB
        await fetch('http://localhost:4000/items',{
            method:"Post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
             body: JSON.stringify({
                 query: ` mutation{
                delItem(id:"${event.target.id}")
                    }`
             })
        })  

        //                       delete from  local-state   

      const arr=[...items];           
      arr.splice(arr.indexOf(arr.find(e=>(e.id==event.target.id))),1);      
      setItems(arr);    
     }

     
    
    return (
    <div>
        <h2><div style={{ background: "gray" }}> Showcase  {!props.show ? 'ALL' : ' SELECTED'} {FcList()}</div></h2>
        <div className="maincases">
             {items.map(item => (
                <div key={item.id} className="case-box">
                    <Link to={"/case/" + item.id} ><h3 style={{ color: 'blue' }}>name: {item.name} <button id={item.id} onClick={delItem}>X</button></h3></Link>
                </div>

                ))}
            </div>

        </div>


    )
};

export default Showcase;