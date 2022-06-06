import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, Box, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import OutlinedInput from '@mui/material/OutlinedInput';



// ------------------------------------------------------------------------------------
// --------                                                                    --------
// --------        THIS CODE IS UNDER DEVELOPMENT AND IS NOT USED ANYWHERE     --------
// ----------                                                                  --------
//-------------------------------------------------------------------------------------

import React from 'react'

// const useStyles = makeStyles((theme) => ({
//     logoLg: {
//         display: "none",
//         [theme.breakpoints.up("sm")]: {
//             display: "block",
//         },
//     },
//     logoSm: {
//         display: "block",
//         [theme.breakpoints.up("sm")]: {
//             display: "none",
//         },
//     },
// }))





const useStyles = makeStyles({
    root: {
        "& input": {
            color: "black",
            backgroundColor: "white",
            borderRadius: "50px",
            border: "none",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            borderRadius: "50px",
            notchedOutline: "false"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderRadius: "50px",
            border: "none",
            notchedOutline: "false"
        }
    },

})

export default function ResponsiveAppBar() {
    const classes = useStyles()
    return (
        <AppBar
            sx={{ backgroundColor: 'rgba(107, 45, 221, 1)', position: 'sticky', display: 'flex' }}
        >
            <Toolbar>

                <Typography
                    variant="h6"
                >
                    Pictory's Social
                </Typography>
                <TextField
                    variant="outlined"
                    sx={{ marginLeft: "100px", paddingBottom: "15px", color: 'black', width: "693px", height: "30px", alignSelf: 'center', }}
                    className={classes.root}
                    label="Search People, Post or anything"
                    size="small"
                    notch="false"
                    autoComplete='off'
                />
            </Toolbar>
        </AppBar>
    )
}
