const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const  helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const multer = require('multer')
const Post = require('./models/Post')
const path = require('path')
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:true}))

dotenv.config()


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},()=>{
  console.log("Mongo DB Connected")
})


app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Middle Waresssss

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single("file"), (req, res)=>{
  try {
    return res.status(200).json("fileUploaded successfully")
  } catch (error) {
    console.log(error)
  }
})

app.use(helmet())
app.use(morgan("common"))

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/post', postRoute)

const server = app.listen(3001, function(){
  console.log("App running on port 3001");
});

const io = require('socket.io')(server,{
  cors: {
    origin: 'http://localhost:3000'
  }
})

io.on('connection', (socket)=>{
  console.log("Connected")
    

  socket.on("comment", (comment)=>{
    async function postComment() {

    try{
          const post = await Post.findById(comment.postId)
          const toSend = {
              name: comment.user,
              comment: comment.comment,
              postId: comment.postId
          }
          await post.updateOne({$push: {comments : toSend}})
      } catch (error) {
          console.log(error)
      }
  }

    postComment()
        io.emit("newCommentRecieved", comment)
    })

    socket.on("post", async (newPost) =>{
      const post = await new Post({
        userId: newPost.userId,
        desc: newPost.desc,
      })
      io.emit("newPost", post)
    })

  socket.on("disconnect", ()=>{
    console.log("Client disconnected")
  })
})
