import './index.css'
import './App.css'
import Home from './components/Home/Home'
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register/Register'
import Login from './components/login/Login'


function App() {

  return (
<<<<<<< HEAD
    <>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
        
       
     </Routes>
     

    </>
   
=======
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>RONY</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
>>>>>>> fab36ca76592f7c17d04a0c93396876f42693d75
  )
}

export default App
