import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
const Sidebar = ({logoutBtnHandler}) => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className="logo">Admin Page</span>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <li>
            <DashboardIcon className='icon'/>
            <span><Link to='/admin-page-react/' className='link'>Dashboard</Link></span>
          </li>
          <li>
            <PersonOutlinedIcon className='icon'/>
            <span><Link to='/admin-page-react/users' className='link'>Users</Link></span>
          </li>
          <li>
            <AccountCircleIcon className='icon'/>
            <span><Link to='/admin-page-react/profile' className='link'>Profile</Link></span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span><Link to='/admin-page-react/login' className='link' onClick={logoutBtnHandler}>Logout</Link></span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar