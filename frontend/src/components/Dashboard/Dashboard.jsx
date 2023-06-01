import './Dashboard.css'
import Navbar from '../../Utils/Navbar/Navbar';
import Sidebar from '../../Utils/Sidebar/Sidebar';
import { PropTypes } from 'prop-types';

const Dashboard = ({childComponent}) => {
    return (
        <div className="dashboard--container">
            <Navbar />
            <Sidebar />
            {childComponent}
        </div>
    )
}

Dashboard.propTypes = {
    childComponent: PropTypes.node.isRequired,
}

export default Dashboard;