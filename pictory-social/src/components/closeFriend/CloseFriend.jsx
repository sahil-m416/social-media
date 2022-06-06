import './closeFriend.css'

import React from 'react'
import { ImageListItem, List, ListItem, Typography } from '@mui/material'

export default function CloseFriend({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <List className="sidebarFriend">
            <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </List>
    )
}
