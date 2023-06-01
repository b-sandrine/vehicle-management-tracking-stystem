import './Dashboard.css'
import Navbar from '../../Utils/Navbar/Navbar';
import Sidebar from '../../Utils/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard--container">
            <Navbar />
            <Sidebar />
        </div>
    )
}

export default Dashboard;