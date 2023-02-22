import './index.css'
import './App.css'
import Home from './components/Home/Home'
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register/Register'
import Login from './components/login/Login'
import Ebooks from './components/Ebooks/Ebooks';


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/ebooks' element={<Ebooks/>} ></Route>
        
       
     </Routes>
     

    </>
   
  )
}

export default App
