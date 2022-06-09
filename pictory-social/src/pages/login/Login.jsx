import React, { useContext, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import { loginCall } from '../../apiCalls'
import { AuthContext } from "./../../context/AuthContext";

// Custom Styles
const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(107, 45, 221, 1)",
            borderRadius: "10px"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(107, 45, 221, 1)",
            borderRadius: "10px"
        }
    },

    login: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    loginWrapper: {
        width: "70%",
        height: "70%",
        display: "flex"
    },
    loginLeft: {
        flex: 1,
        display: "flex",
        flexDirection: " column",
        justifyContent: "center"
    },
    loginRight: {
        flex: 1,
        display: "flex",
        flexDirection: " column",
        justifyContent: "center"
    },
    loginLogo: {
        fontSize: "50px",
        fontweight: "800",
        color: "rgba(107, 45, 221, 1)",
        marginbottom: "10px",
    },

    loginDesc: {
        fontSize: "24px"
    },

    loginBox: {
        height: "300px",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    loginInput: {
        height: "50px",
        borderRadius: "50px",
        border: "1px solid gray",
        font: "optional",
        fontSize: "18px",
        paddingLeft: "20px",
    },


    loginButton: {
        height: "50px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "rgba(107, 45, 221, 1) !important",
        color: "white",
        fontSize: "20px",
        fontWeight: "500",
        cursor: "pointer",
    },

    loginForgot: {
        textAlign: "center",
        color: "rgba(107, 45, 221, 1)",
        cursor: "pointer",
    },

    loginRegisterButton: {
        width: "60%",
        alignSelf: "center",
        height: "50px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "#42b72a",
        color: "white",
        fontSize: "20px",
        fontWeight: "500",
        cursor: "pointer"
    },



    // FOR DARK MODE



    rootDark: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(107, 45, 221, 1)",
            borderRadius: "10px",
            color: "white !important",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(107, 45, 221, 1)",
            borderRadius: "10px",
            color: "white !important",
        },
        "input": {
            color: "white !important"
        }
    },


    loginDark: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#101010",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    loginDescDark: {
        fontSize: "24px",
        color: "white",
    },


    loginBoxDark: {
        height: "300px",
        padding: "20px",
        backgroundColor: "black",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white"
    },


})


export default function Login() {
    const classes = useStyles()
    let navigate = useNavigate()
    const email = useRef()
    const password = useRef()
    const { user, isFetching, dispatch } = useContext(AuthContext)
    const [darkMode, setDarkMode] = useState(false)

    console.log(user)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    }


    const onLoginClick = () => {
        navigate("/register")
    }



    return (
        <Box className={darkMode ? classes.loginDark : classes.login}>
            <Box className={classes.loginWrapper}>
                <Box className={classes.loginLeft}>

                    <Typography
                        variant="h3"
                        component="div"
                        className={classes.loginLogo}
                    >
                        Pictory's Social
                    </Typography>

                    <Typography
                        variant="span"
                        className={darkMode ? classes.loginDescDark : classes.loginDesc}
                        component="div"
                    >
                        Connect with your friends. A personalised Social Media.
                    </Typography>

                </Box>
                <Box className={classes.loginRight}>
                    <form onSubmit={handleFormSubmit} className={darkMode ? classes.loginBoxDark : classes.loginBox}>

                        <TextField
                            variant="outlined"
                            // InputProps={{
                            //     className: classes.input
                            // }}
                            label="Email"
                            className={darkMode ? classes.rootDark : classes.root}
                            inputRef={email}
                            required
                        />

                        <TextField
                            // InputProps={{
                            //     className: classes.input
                            // }}
                            variant="outlined"
                            type="password"
                            label="Password"
                            className={darkMode ? classes.rootDark : classes.root}
                            inputRef={password}
                            required
                        />

                        <Button disabled={isFetching} type="submit" variant="contained" className={classes.loginButton}>{isFetching ? <CircularProgress /> : "Log In"}</Button>
                        <Typography className={classes.loginForgot}>Forgot Password</Typography>
                        <Button className={classes.loginRegisterButton} onClick={onLoginClick} color="success" variant="contained">{isFetching ? <CircularProgress /> : "Create a new Account"}</Button>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}