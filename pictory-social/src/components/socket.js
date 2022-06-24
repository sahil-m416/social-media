// // Creating Socket Connection 🚀 in a different file to make sure
// // that Socket connection is made only once per user 
// // else Socket will make many connections as it will encounter any state change in the component where it is instantiated

import io from "socket.io-client"

export const socket = io("ws://localhost:3001")