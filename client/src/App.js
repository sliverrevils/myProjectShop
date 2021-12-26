
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Main from './pages/main/main';
import Showcase from './pages/showcase/showcase';
import Info from './pages/info/info';
import Case from './pages/case/case';
import MainCases from './pages/mainCases/mainCases'

import { AddCase } from './pages/addCase/AddCase';



function App() {
  
  return (
    <div className="App">   
   
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Showcase />} />
          <Route path="/main" element={<MainCases/>} />
          <Route path="/:select"  element={<Showcase  show="1" />} />
          <Route path="/info" element={<Info />} />
          <Route path="/case/:id" element={<Case />} />
          <Route path="/add" element={<AddCase/>}/>
          <Route path="*" element={<Main/>} />
        </Route>
      </Routes>
    
    </div>
    
  );
}

export default App;
