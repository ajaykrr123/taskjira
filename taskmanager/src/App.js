import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import Dashboard from './components/Dashboard';
import Tasklist from './components/Tasklist';
import Dnd from './components/Dnd';
import Login from './components/Login';
import AddUser from './components/AddUser';
import User from './components/User';
import { BrowserRouter,Routes, Route, Link, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
  
      

  <Routes>
 
      {/* <Route path="/Signup" element={<Navigate replace to="/Signup" />} /> */}
    
      <Route path="/Tasklist" element={<Tasklist />} />
      <Route path="/AddTask" element={<AddTask/>} />
      <Route path="/Dnd" element={<Dnd/>} />
      <Route path="/DashBoard" element={<Dashboard/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/AddUser" element={<AddUser/>} />
      <Route path="/User" element={<User/>} />
      {/* <Route path="/P" element={<AddProduct/>} /> */}
      {/* <Route path="/" element={<Navigate replace to="/Login" />} /> */}
  </Routes>
  
</BrowserRouter>
  
    </div>
  );
}

export default App;
