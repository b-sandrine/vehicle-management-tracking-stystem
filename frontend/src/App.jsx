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
      <Route path='register' element={<Signup/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='owners' element={<Dashboard childComponent={<CarOwner />}/>}  />
      <Route path='vehicles' element={<Dashboard childComponent={<Vehicles />}/>} />
    </Routes>
  )
}

export default App
