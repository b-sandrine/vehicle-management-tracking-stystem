import './Dashboard.css'
import Navbar from '../../Utils/Navbar/Navbar';
import Sidebar from '../../Utils/Sidebar/Sidebar';

// eslint-disable-next-line react/prop-types
const Dashboard = ({childComponent}) => {
    return (
        <div className="dashboard--container">
            <Navbar />
            <Sidebar />
            {childComponent}
        </div>
    )
}

export default Dashboard;