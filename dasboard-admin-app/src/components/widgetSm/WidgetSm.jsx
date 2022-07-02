import React from 'react'
import './widgetSm.scss'
import max from './max.jpg' 
import { Visibility } from '@material-ui/icons'

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={max} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Maxwell Olingo</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={max} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Maxwell Olingo</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={max} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Maxwell Olingo</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={max} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Maxwell Olingo</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={max} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Maxwell Olingo</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility classname="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm;
