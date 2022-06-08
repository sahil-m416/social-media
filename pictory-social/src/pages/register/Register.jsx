import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { makeStyles } from "@mui/styles"
import { useNavigate } from 'react-router-dom'
import { registerCall } from '../../apiCalls'

// // Custom Styling starts here
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
        height: "400px",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },


    loginInput: {
        height: "50px",
        borderRadius: "10px",
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
    }
})


export default function Register() {
    let navigate = useNavigate()
    const classes = useStyles()
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const handleRegistration = async (e) => {
        e.preventDefault()
        if (confirmPassword.current.value !== password.current.value) {
            alert("Passwords Do not Match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                const res = await registerCall(user)
                if (res.response.status === 401) {
                    alert("Username already in use")
                    return;
                }
                if (res.response.status === 402) {
                    alert("Email already registered")
                    return;
                }
                navigate("/")
            } catch (error) {
                console.log(error)
            }

        }
    }

    const onLoginClick = () => {
        navigate("/")
    }


    return (
        <Box className={classes.login}>
            <Box className={classes.loginWrapper}>
                <Box className={classes.loginLeft}>
                    <Typography variant="h3" component="div" className={classes.loginLogo}>Pictory's Social</Typography>
                    <Typography variant="span" className="loginDesc" component="div">Connect with your friends. A personalised Social Media.</Typography>
                </Box>
                <Box className={classes.loginRight}>
                    <form className={classes.loginBox} onSubmit={handleRegistration}>
                        <TextField variant="outlined" label="Username" className={classes.root} required inputRef={username} />
                        <TextField variant="outlined" label="Email" type="email" className={classes.root} required inputRef={email} />
                        <TextField variant="outlined" type="password" label="Password" className={classes.root} required inputRef={password} />
                        <TextField variant="outlined" type="password" label="Confirm Password" className={classes.root} required inputRef={confirmPassword} />

                        <Button type='submit' variant="contained" className={classes.loginButton}>Sign Up</Button>
                        <Typography className={classes.loginForgot}>Forgot Password</Typography>
                        <Button className={classes.loginRegisterButton} onClick={onLoginClick} color="success" variant="contained">Log into an existing account.</Button>
                    </form>
                </Box>
            </Box>
        </Box >
    )
}

