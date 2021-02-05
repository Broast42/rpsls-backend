const express = require('express');
const cors = require('cors');


const server = express()

server.use(express.json())
server.use(cors({origin: true, credentials: true }))

server.get("/", (req, res) => {
    res.json({message: "Server is running", port: process.env.PORT})
})

//routes


//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
        message: "Something went wrong",
        error: err
	})
})

module.exports = server