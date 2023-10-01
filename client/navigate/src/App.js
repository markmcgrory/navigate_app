import './App.css';
import NavigateContainer from '../src/container/NavigateContainer.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <NavigateContainer/>
    </Router>
  );
}

export default App;
