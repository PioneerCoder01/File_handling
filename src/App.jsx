import './App.css'
import Home from './components/home/home'
import Login from "./components/Login/login";
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
