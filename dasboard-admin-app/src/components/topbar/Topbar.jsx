import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import './topbar.scss' 
import max from './max.jpg'

const Topbar = () => {
    return (
        <div className="topbar">
           <div className="topbarWrapper">
               <div className="topLeft">
            <span className="logo">MaxOliadmin</span>
               </div>
               <div className="topRight">
                   <div className="topbarIconContainer">
                      <NotificationsNone/> 
                      <span className="topIconBadge">2</span>
                   </div>
                   <div className="topbarIconContainer">
                      <Language/>
                      <span className="topIconBadge">2</span>
                   </div>
                   <div className="topbarIconContainer">
                      <Settings/>
                   </div>
                   <img src={max} alt="max" className="topAvatar" /> 
               </div>
           </div>
        </div>
    )
}

export default Topbar
