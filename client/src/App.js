import React,{useState} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Singin from './components/Signin/Singin'
import Register from './components/Register/Register'
import './App.css'
import Home from './components/Home/Home'
import Add from './components/Add/Add'
import Desc from './components/description/Desc'
const App = () => {
  const [mail,setmail] =useState('');
const [keys ,setkeys] = useState("");
const[post,setpost] = useState('');
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Singin/>}></Route>
          <Route path='/register' element={<Register setmail={setmail}/>}></Route>
          <Route path='/notes/home' element={<Home mail={mail} keys={keys} setkeys={setkeys} post={post} setpost={setpost} />}></Route>
          <Route path='/notes/add' element={<Add  mail={mail}/>}></Route>
          <Route path='/notes/desc' element={<Desc keys={keys} post={post}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
