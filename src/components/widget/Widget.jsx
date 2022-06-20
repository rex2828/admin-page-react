import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({ type }) => {
    let data;
    const diff = 20
    const amount = 100
    switch (type) {
        case 'user':
            data = {
                title: "USERS",
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlinedIcon className='icon' />
            }
            break;
        case 'order':
            data = {
                title: "ORDERS",
                isMoney: false,
                link: 'View all orders',
                icon: <ShoppingCartOutlinedIcon className='icon' />
            }
            break;
        case 'earning':
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: 'View net earnings',
                icon: <MonetizationOnOutlinedIcon className='icon' />
            }
            break;
        case 'balance':
            data = {
                title: "BALANCE",
                isMoney: true,
                link: 'See details',
                icon: <AccountBalanceWalletOutlinedIcon className='icon'/>
            }
            break;

        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget