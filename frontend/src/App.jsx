import './App.css'
import { Route, Routes } from 'react-router'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
 return(
    <Routes>
      <Route path='register' Component={Signup}></Route>
      <Route path='login' Component={Login}></Route>
      <Route path='' Component={Dashboard} />
    </Routes>
  )
}

export default App
