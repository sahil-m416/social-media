import { Box } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import { AuthContext } from "../../context/AuthContext"
import './feed.css'
import { socket } from '../socket'
import axios from 'axios'
import Loading from '../Loading/Loading'
export default function Feed() {
    const [posts, setPosts] = useState([])
    //create a state
    // State uplifting
    const [loading, setLoading] = useState(true)
    const [postComments, setPostComments] = useState({})
    const { user: currentUser } = useContext(AuthContext);

    // // Fetch comments and set setPostComments accordingly

    useEffect(() => {
        socket.off("newCommentRecieved").on("newCommentRecieved", comment => {
            console.log("THis is called")
            updateComments(comment)
        })
    }, [])

    const updateComments = (comment) => {
        const postId = comment.postId
        if (postComments[postId]) {
            postComments[postId].push(comment)
        } else {
            postComments[postId] = [comment]
        }
        setPostComments({ ...postComments })
    }



    const handleComment = (postId, comment) => {
        // Todo Send to database here...
        socket.emit("comment", {
            user: currentUser.username,
            postId: postId,
            comment: comment
        })
    }


    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 4000);
        const fetchPost = async () => {
            const res = await axios.get("post/timeline/all")
            setPosts(res.data)
        }
        fetchPost()
    }, [])

    return (
        <Box className='feed'>
            <Box className="feedWrapper">
                <Share />
                {loading ?
                    <>
                        <Loading />
                        <Loading />

                    </> :
                    <>
                        <Box className="allPosts">
                            {posts.map((p) => (
                                <Post handleComment={handleComment} comments={postComments[p._id] || []} key={p._id} post={p} />
                            ))}
                        </Box>
                        <Loading />
                    </>
                }
            </Box>
        </Box>
    )
}
