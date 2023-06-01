import './App.css'
import { Route, Routes } from 'react-router'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import CarOwner from './Utils/CarOwners/CarOwners'
import Vehicles from './Utils/Vehicles/Vehicle'

function App() {
 return(
    <Routes>
      <Route path='register' Component={Signup}></Route>
      <Route path='login' Component={Login}></Route>
      <Route path='owners' element={<Dashboard><CarOwner/></Dashboard>} />
      <Route path='vehicles' element={<Dashboard><Vehicles/></Dashboard>} />
    </Routes>
  )
}

export default App
