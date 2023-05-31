import './App.css'
import { Route, Routes } from 'react-router'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'

function App() {
 return(
    <Routes>
      <Route path='register' Component={Signup}></Route>
      <Route path='login' Component={Login}></Route>
    </Routes>
  )
}

export default App
