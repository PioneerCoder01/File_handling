import './App.css'
import Home from './components/home/home'
import Login from "./components/Login/login";
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' Component={<Login />}></Route>
        <Route path='/home' Component={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
