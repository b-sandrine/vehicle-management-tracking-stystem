import './Sidebar.css'
import { FaUser, FaCarAlt } from 'react-icons/fa'

export default function Sidebar () {
    return (
        <div className="sidebar--container">
            <div className="sidebar--item">
                <FaUser />
                <p>Car Owners</p>
            </div>
            <div className="sidebar--item">
                <FaCarAlt />
                <p>Vehicles</p>
            </div>
        </div>
    )
}