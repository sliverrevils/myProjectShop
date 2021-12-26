import React, { createContext, useContext, useState } from "react";
import Footer from "../../MainWinELEMENTS/Footer/Footer";
import classes from "./Layout.module.css";

//             CONTEXT 
const GlobalContext = createContext();

//          --- LAYOUT COMPONENT ---
const Layout = ({ children }) => {
    const initState = {
        test: "TEXT FOR TEST",
        footer: {
            addDelBlock: false,
            basket: [],
            
        },
    }
    //           Global State
    const [globalState, setData] = useState(initState);
    //           FUNC Update state (with saving old data )
    const setGlobalState = value => setData(oldValues => ({ ...oldValues, ...value }));

    //send context with global state for all childrens in Layout
    return (
        <div className={classes.Layout}>
            <h3>Layout</h3>

            <GlobalContext.Provider value={{ globalState, setGlobalState }}>{children}</GlobalContext.Provider>

            <div className={classes.Footer}><Footer {...{ globalState, setGlobalState }} /></div>
        </div>

    )
}
export default Layout;
// HOOK FOR USE GLOBAL STATE ON CHILDRENS 
export const useGlobalContext = () => useContext(GlobalContext);



