import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, Notifications, PermIdentity, Search } from '@material-ui/icons';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text="Explore" />
            <SidebarOption Icon={Notifications} text="Notifications" />
            <SidebarOption Icon={MailOutline} text="Messages" />
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOption Icon={ListAlt} text="Lists" />
            <SidebarOption Icon={PermIdentity} text="Profile" />
            <SidebarOption Icon={MoreHoriz} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;