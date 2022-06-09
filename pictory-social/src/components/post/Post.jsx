
import "./post.css"
import React, { useState, useEffect, useContext } from 'react'
import { MoreVert } from "@mui/icons-material"
import { Box, Typography, Button, TextField, ImageListItem } from "@mui/material"
import axios from 'axios'
import { format } from 'timeago.js'
import { AuthContext } from "../../context/AuthContext"
export default function Post({ post, handleComment, comments }) {


    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user: currentUser } = useContext(AuthContext);
    const [comment, setComment] = useState("")
    const [commentValue, setCommentValue] = useState(post.comments.length)
    const [commentList, setCommentList] = useState([])


    useEffect(() => {
        const fetchComments = async (id) => {
            const res = await axios.get(`post/${id}/getAllComments`)
            setCommentList(res.data.comments)
        }
        fetchComments(post._id)

    }, [post._id])

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    // TODO: to append comment
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`user/${post.userId}`)
            setUser(res.data)
        }
        fetchUsers()
    }, [post.userId])

    const likeHandler = async () => {
        try {
            await axios.put("/post/" + post._id + "/like", { userId: currentUser._id })
        } catch (error) {
            console.log(error)
        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    const submitComment = () => {
        if (comment === "" || comment === " ") {
            alert("Cannot post Empty comment")
            return;
        }
        setCommentValue(commentValue + 1)
        handleComment(post._id, comment)
        setComment("")
    }
    const handleInputChange = (e) => {
        setComment(e.target.value)
    }

    return (

        // // Using Box here because MUI Container comes with default padding so we have to use disablePadding prop
        // // While working with Box Component, we need not to disablePadding every time

        <Box className="post">
            <Box className="postWrapper">
                <Box className="postTop">
                    <Box className="postTopLeft">
                        <ImageListItem component="img" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} className="postProfileImg" alt="" />
                        <Typography variant="span" className="postUsername">{user.username}</Typography>
                        <Typography variant="span" className="postDate">{format(post.createdAt)}</Typography>
                    </Box>
                    <Box className="postTopRight">
                        <MoreVert />
                    </Box>
                </Box>
                <Box className="postCenter">
                    <Typography component="span" className="postText">{post?.desc}</Typography>
                    <ImageListItem component="img" className="postImg" src={PF + post.image} alt="" />
                </Box>
                <Box className="postBottom">
                    <Box className="postBottomLeft">
                        <ImageListItem component="img" className="likeIcon" src={`${PF}like.png`} alt="" onClick={likeHandler} />
                        <ImageListItem component="img" className="likeIcon" src={`${PF}heart.png`} alt="" onClick={likeHandler} />
                        <Typography component="span" className="postLikeCounter">{like} people liked it</Typography>
                    </Box>
                    <Box className="postBottomRight">
                        <Typography component="span" className="postCommentText">{commentValue} Comments</Typography>
                    </Box>
                </Box>

                <Box className="commentWrapper">
                    <TextField variant="outlined" autoComplete="false" label="Comment" size="small" className="commentTextArea" placeholder="Type your comment" onChange={handleInputChange} value={comment} />
                    <Button variant="contained" className="commentButton" onClick={submitComment}>Comment</Button>
                </Box>
                <Box className="comments">


                    {/* // // These comments are mapped real time from socket */}
                    <Box className="allUsersComments">
                        {
                            comments.map((m) => (
                                <>
                                    <Box className="allComments">
                                        <Typography component="span" className="commentName">{m.user}</Typography>
                                        <Typography component="p" className="commentValue">{m.comment}</Typography>
                                    </Box>
                                </>
                            ))
                        }
                    </Box>


                    {/* // // These comments are being mapped from the backend once after post is loaded */}
                    <Box className="allUsersComments">
                        {
                            commentList.map((m) => (
                                <>
                                    <Box className="allComments">
                                        <Typography component="span" className="commentName">{m.name}</Typography>
                                        <Typography component="p" className="commentValue">{m.comment}</Typography>
                                    </Box>
                                </>
                            ))
                        }
                    </Box>

                </Box>
            </Box>
        </Box >
    )
}