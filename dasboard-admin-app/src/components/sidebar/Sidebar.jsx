import { AttachMoney, ChatBubbleOutline, DynamicFeed, Equalizer, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Olingo Dashboard</h3>
                   <ul className="sidebarList">
                       <Link to='/' className="link">
                            <li className="sidebarListItem active">
                           <LineStyle className="sidebarIcon"/>
                           Home
                       </li>
                       </Link>
                       <li className="sidebarListItem">
                           <Timeline className="sidebarIcon"/>
                           Analytics
                       </li>
                       <li className="sidebarListItem">
                           <TrendingUp className="sidebarIcon"/>
                           Sales
                       </li>
                   </ul>
               </div>

               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className="sidebarList">
                       <Link to="/users" className="link">
                        <li className="sidebarListItem ">
                           <PermIdentity className="sidebarIcon"/>
                           Users
                        </li>
                       </Link>
                       <Link to="/products" className="link">
                        <li className="sidebarListItem">
                           <Storefront className="sidebarIcon"/>
                           Products
                        </li>
                       </Link>
                       <li className="sidebarListItem">
                           <AttachMoney className="sidebarIcon"/>
                           Transactions
                       </li>
                       <li className="sidebarListItem">
                           <Equalizer className="sidebarIcon"/>
                           Reports
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Notifications</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                           <MailOutline className="sidebarIcon"/>
                           Mail
                       </li>
                       <li className="sidebarListItem">
                           <DynamicFeed className="sidebarIcon"/>
                           Feedback
                       </li>
                       <li className="sidebarListItem">
                           <ChatBubbleOutline className="sidebarIcon"/>
                           messages
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Staff</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                           <WorkOutline className="sidebarIcon"/>
                           Manage
                       </li>
                       <li className="sidebarListItem">
                           <Timeline className="sidebarIcon"/>
                           Analytics
                       </li>
                       <li className="sidebarListItem">
                           <Report className="sidebarIcon"/>
                           Reports
                       </li>
                   </ul>
               </div>
           </div>
        </div>
    )
}

export default Sidebar;
