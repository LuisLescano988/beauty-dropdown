import React from 'react';
import './App.css';
import DropTest from './components/DropTest';


function App() {

  return (
    <div className="App" onScroll={()=>console.log("anda")} >
        <DropTest/>
    </div>
  );
}

export default App;
