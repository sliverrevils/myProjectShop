import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getAllItemsDB } from "../../DB/querysDB";
import ItemBox from "./ItemBox/itemBox";
import './mainCases.css'




function MainCases() {
    const [items, setItems] = useState([]);

    async function fetchData() {
        let { data: { allItems: arr } } = await getAllItemsDB();
        setItems(arr);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className="main">
            {items.map(item => (<ItemBox key={item.id + item.name} item={{ ...item }} />))}
        </div>
    );
}

export default React.memo(MainCases);