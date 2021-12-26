import React, { useState } from "react";

export const useToggle=(val=true)=>{
    const [data,setData]=useState(val);
    const setValue=()=>setData(!data);

    return [data,setValue];
}