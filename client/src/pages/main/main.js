import React from "react";
import {SiAdblock } from "react-icons/si";
import {NavLink,Outlet, useMatch} from 'react-router-dom';
import { MyLink } from "../../components/myLink";


const Main=par=>{
    
    const ico=SiAdblock();
    
    const match=useMatch("/");
    console.log(match);

     
    
    return(
        <div>
        {match ? 
        <>
        <h1 style={{background:"black",color:"white"}}>Shop name {ico}</h1>   
        <h2 style={{background:"gray",color:"white"}}>                
            <NavLink to="/" className={({isActive})=>isActive?'activeYes':'activeNo'}>[showcase]</NavLink>
            <MyLink to="/info">[info]</MyLink>
            <NavLink to="/case" style={({isActive})=>({color:isActive?'red':'yellow'})}>[case]</NavLink>
            <NavLink to="/add">[addItem]</NavLink>
            </h2>   
        </>
        :
        <Outlet />}
        </div>
       
    )
}







export default Main;