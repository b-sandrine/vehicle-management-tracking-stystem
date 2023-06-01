import './Navbar.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'

export default function Navbar() {
    return (
        <div className="navbar--container">
            <img src={logo} alt="App logo" className='left' />
            <img src={user} alt="User profile" className='right'/>
        </div>
    )
}