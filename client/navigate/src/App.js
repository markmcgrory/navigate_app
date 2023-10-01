import logo from './logo.svg';
import './App.css';

import NavigateContainer from '../src/container/NavigateContainer.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
        <NavigateContainer/>
    </div>
  );
}

export default App;
