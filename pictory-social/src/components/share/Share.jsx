import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import { Box, Divider, Typography, Button } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import './share.css'
import { socket } from '../socket';
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

export default function Share() {

    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [file, setFile] = useState(null)
    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if (file) {
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append("name", fileName)
            data.append("file", file)
            newPost.image = fileName
            try {
                await axios.post("/upload", data)
            } catch (error) {
                console.log("ERROR UPLOADING FILE")
                console.log(error)
            }
        }
        try {
            await axios.post("/post", newPost)
            socket.emit("post", newPost)
            // if (window.confirm("New post available, want to reload the page ?")) {
            //     window.location.reload()
            // }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Box className="share">
            <Box className="shareWrapper">
                <Box className="shareTop">
                    <Typography component="img" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} className="shareProfileImg" alt="" />
                    <Typography component="input" type="text" placeholder={"What's on your mind, " + user.username + " ?"} className="shareInput" ref={desc} />
                </Box>
                <Divider sx={{ margin: "20px" }} className="shareHr" />
                <form className="shareBottom" onSubmit={submitHandler}>
                    <Box className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <Typography id="file" component="input" accept=".png,.jpg,.jpeg" onChange={(e) => setFile(e.target.files[0])} type="file" className="shareOptionText" sx={{ display: "none" }} />
                            <Typography component="span" className="shareOptionText">Photo or Video</Typography>
                        </label>

                        <Box className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <Typography component="span" className="shareOptionText">Tag</Typography>
                        </Box>

                        <Box className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <Typography component="span" className="shareOptionText">Location</Typography>
                        </Box>

                        <Box className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <Typography component="span" className="shareOptionText">Feelings</Typography>
                        </Box>
                    </Box>
                    <Button
                        className="shareButton"
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: "rgba(107, 45, 221, 1)",
                            "&:hover": {
                                backgroundColor: "rgba(107, 45, 221, 1)"
                            }
                        }}
                        type="submit"
                    >Post</Button>
                </form>
            </Box>
        </Box>
    )
}
