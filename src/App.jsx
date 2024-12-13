// import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';
function App(){
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
