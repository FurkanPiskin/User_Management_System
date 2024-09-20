
import './App.css';
import { Header } from './components/Header';
import { AddEdit } from './pages/addEdit/AddEdit';
import { Home } from './pages/home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import { View } from './pages/view/View';
function App() {
  return (
    <Router>
    <div className="App">
     
  <Header/>
  <ToastContainer/>
  
  <div className='container'>
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/add' element={<AddEdit/>}/>
  <Route path='/update/:id' element={<AddEdit/>}/>
  <Route path='/view/:id' element={<View/>}/>
  </Routes>
  </div>
    </div>
    </Router>
  );
}

export default App;
