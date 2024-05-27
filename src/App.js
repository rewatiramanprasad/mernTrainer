// import logo from './logo.svg';/
import './App.css';
import Home from './screen/Home';
import AddResource from './screen/AddResouce';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screen/Login';


function App() {
  return (
    // <div className="App">
      <Router basename='/merntrainer'>
        <Routes>
        <Route path="/merntrainer" exact element={<Home/>} />
        <Route path="/newresource"  element={<AddResource/>} /> 
        <Route path="/login"  element={<Login/>} /> 
        </Routes>
      </Router>
    // </div>
  );
}

export default App;
