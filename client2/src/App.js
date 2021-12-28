
import { Route, Routes } from 'react-router-dom';
import classes from'./App.module.css';
import React from 'react';
import Test from './pages/test/test';
import ListItems from './pages/ListItems/ListItems';
import Form from './pages/form/form';
import { useToggle } from './Hooks/Hooks';
import { useGlobalContext } from './HOC/Layout/Layout';

function First({val}){
  const [data,setData]=useToggle(); // TEST TOGGLE HOOK
 // console.log(data);
  return(
    <div>
      <h1>Hellow! {val}</h1>
    <button onClick={setData}>OK - {+data}</button>
    {data&&( <h1> Hellow</h1>)}
    </div>
  )
}


function App() {
  

  return (
    <div className={classes.App}>
      <h1>App</h1>
      <Routes>
        <Route path="/"  element={<First val="1"/>} />  
        <Route path="/test" element={<Test/>} />  
        <Route path="/list" element={<ListItems/>} />  
        <Route path="/form" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
