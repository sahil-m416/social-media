import "./sidebar.css";
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import { Link } from "react-router-dom";


// LEFTBAR


export default function Sidebar() {
    return (
        <Box className="sidebar">
            <Box className="sidebarWrapper">
                <List className="sidebarList">

                    <Link to="/misc" style={{ textDecoration: "none" }}>
                        <ListItem disablePadding className="sidebarListItem">
                            <ListItemIcon>
                                <RssFeed className="sidebarIcon" />
                            </ListItemIcon>
                            <ListItemText >
                                <Typography component="span" variant="span" className="sidebarListItemText">Feed</Typography>
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <ListItem disablePadding className="sidebarListItem">
                        <ListItemIcon>
                            <Chat className="sidebarIcon" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography component="span" variant="span" className="sidebarListItemText">Chats</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding className="sidebarListItem">
                        <ListItemIcon>
                            <PlayCircleFilledOutlined className="sidebarIcon" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography component="span" variant="span" className="sidebarListItemText">Videos</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding className="sidebarListItem">
                        <ListItemIcon>
                            <Group className="sidebarIcon" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography component="span" variant="span" className="sidebarListItemText">Groups</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding className="sidebarListItem">
                        <ListItemIcon>
                            <Bookmark className="sidebarIcon" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography component="span" variant="span" className="sidebarListItemText">Bookmarks</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding className="sidebarListItem">
                        <ListItemIcon>
                            <HelpOutline className="sidebarIcon" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography component="span" variant="span" className="sidebarListItemText">Questions</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding className="sidebarListItem">
                        <ListItemIcon>
                            <WorkOutline className="sidebarIcon" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography component="span" variant="span" className="sidebarListItemText">Jobs</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding className="sidebarListItem">
                        <ListItemIcon>
                            <Event className="sidebarIcon" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography component="span" className="sidebarListItemText">Events</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding className="sidebarListItem">
                        <ListItemIcon>
                            <School className="sidebarIcon" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography component="span" variant="span" className="sidebarListItemText">Courses</Typography>
                        </ListItemText>
                    </ListItem>
                </List>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        backgroundColor: "rgba(107, 45, 221, 1)",
                        "&:hover": {
                            backgroundColor: "rgba(107, 45, 221, 1)"
                        }

                    }} className="sidebarButton">

                    Show More

                </Button>
                <Divider className="sidebarHr" />
            </Box>
        </Box>
    );
}