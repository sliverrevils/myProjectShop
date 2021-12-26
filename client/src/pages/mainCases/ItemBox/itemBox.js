import React from "react";
import { SiNamecheap } from "react-icons/si";
import "./itemBox.css";
import imageS from '../../../IMG/blank.jpg';

const ItemBox=({item:{id,name,discount,description,number,pictures,price}})=>{
   
    return(
        
        <div className='box'>
            <div className="box_name">{name}</div>
            <div className="box_img">
                <img src={imageS} alt="pic" />
                <div className="box_cost"><h1 >{price}$</h1></div>
            </div>
            <div className="box_discount">Скидка {discount}%</div>
            <div className="box_description"> {description} </div>
            <div className="box_id">id:{id}</div>
        </div>
    )
}

export default ItemBox;