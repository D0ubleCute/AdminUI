import React from 'react';

import './topnav.css'

import { Link } from 'react-router-dom';

import Dropdown from '../dropdown/Dropdown';

import notifications from '../../assets/jsonData/notification.json'

import user_image from '../../assets/images/user1.jpg'

import user_menu from '../../assets/jsonData/user-menu.json'

const curr_user = {
    display_name: 'Admin',
    image: user_image
}

const renderNotification = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle= (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)



const TopNav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData = {user_menu}
                        renderItems = {(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='5'
                        contentData = {notifications}
                        renderItems = {(item, index) => renderNotification(item, index)}
                        renderFooter = {() => <Link to='/'>View all</Link>}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown/>
                </div>
            </div>
        </div>
    );
};

export default TopNav;