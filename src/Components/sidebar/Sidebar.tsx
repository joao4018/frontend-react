import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <div className="top"><span className="logo">aggre</span></div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Apps</p>
                    <li>
                         <DashboardIcon className={'icon'}/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <StorefrontIcon className={'icon'}/>
                        <span>MarketPlace</span>
                    </li>
                    <li>
                        <AttachMoneyIcon className={'icon'} />
                        <span>Emprestimos</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <PersonOutlineIcon className={'icon'} />
                        <span>User</span>
                    </li>
                    <li>
                        <SettingsIcon className={'icon'} />
                        <span>Sttings</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className={'colorOption'}></div>
                <div className={'colorOption'}></div>
                <div className={'colorOption'}></div>
            </div>
        </div>
    );
};

export default Sidebar;