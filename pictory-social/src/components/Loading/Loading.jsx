import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import "./loading.css"
import { Box, Typography, Button } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

export default function Loading() {
    return (


        <Box className="post">
            <Box className="postWrapper">
                <Box className="postTop">
                    <Box className="postTopLeft">
                        <Skeleton animation="wave" variant="circular" height={32} width={32} className="postProfileImg" />
                        <Skeleton animation="wave" variant="text" width={70} height={19} className="postUsername" />
                        <Skeleton animation="wave" variant="text" height={14} width={70} className="postDate" />
                    </Box>
                    <Box className="postTopRight">
                        <MoreVert />
                    </Box>
                </Box>
                <Box className="postCenter">
                    <Skeleton animation="wave" variant="text" className="postText" />
                    <Skeleton animation="wave" variant="rectangular" width={445} height={500} />
                </Box>
                <Box className="postBottom">
                    <Box className="postBottomLeft">
                        <Skeleton animation="wave" height={24} width={24} variant="circular" className="likeIcon" />
                        <Skeleton animation="wave" height={24} width={24} variant="circular" className="likeIcon" />
                        <Skeleton animation="wave" variant="text" width={113} height={24} className="postLikeCounter" />

                    </Box>
                    <Box className="postBottomRight">
                        <Skeleton animation="wave" variant="text" width={92} height={20} className="postCommentText" />

                    </Box>
                </Box>

                <Box className="commentWrapper" >
                    <Skeleton animation="wave" wvariant="text" width={303} height={27} />

                </Box>
                <Box className="comments">

                    <Box className="allUsersComments">
                    </Box>

                </Box>
            </Box>
        </Box >
    )
}
