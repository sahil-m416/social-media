import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
import React, { useContext } from 'react'
import './SearchComp.css'
import { ImageListItem } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export default function SearchComp() {



    const { user, dispatch } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const navigate = useNavigate()


    function handleLogout() {
        const logoutConfirm = window.confirm('Are you sure you want to log out ?')
        if (logoutConfirm) {
            dispatch({ type: "LOGOUT_SUCCESS" })
            navigate("/")
        }
    }

    return (
        <Box className="topbarContainer">
            <Box className="topbarLeft">
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <Typography variant="span" className="logo">Pictory's Social</Typography>
                </Link>
            </Box>
            <Box className="topbarCenter">
                <Box className="searchbar">
                    <Search className="searchIcon" />
                    <Typography
                        size="small"
                        variant="input"
                        component="input"
                        placeholder="Search for friend, post or video"
                        className="searchInput"
                    />
                </Box>
            </Box>
            <Box className="topbarRight">
                <Box className="topbarLinks">
                    <Typography className="topbarLink">Homepage</Typography>
                    {/* <Typography className="topbarLink">Timeline</Typography> */}
                </Box>
                <Box className="topbarIcons">
                    <Box className="topbarIconItem">
                        <Person />
                        <Typography className="topbarIconBadge">1</Typography>
                    </Box>
                    <Box className="topbarIconItem">
                        <Chat />
                        <Typography className="topbarIconBadge">2</Typography>
                    </Box>
                    <Box className="topbarIconItem">
                        <Notifications />
                        <Typography className="topbarIconBadge">1</Typography>
                    </Box>
                </Box>
                <LogoutIcon
                    sx={{
                        cursor: "pointer"
                    }}
                    onClick={handleLogout}
                />
                <ImageListItem component="img" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="topbarImg" />
            </Box>
        </Box>
    );
}