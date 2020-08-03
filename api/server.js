const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const cookieParser = require('cookie-parser')

const posterAuthRouter = require("../auth/posterAuthRouter")
const itemsRouter = require("../items/itemRouter")
const posterRouter = require("../poster/posterRouter")
const authenticate = require("../auth/restrict")
const renterAuthRouter = require("../auth/renterAuthRouter")
const Renter = require("../renter/renterRoute")

const server = express()

server.use(cors())
server.use(express.json())
server.use(helmet())
server.use(cookieParser())
server.use("/api/auth",posterAuthRouter)
server.use("/api/auth",renterAuthRouter)
server.use("/api/items",itemsRouter)
server.use("/api/poster",posterRouter)
server.use("/api/renter",authenticate(),Renter)

server.get("/", async (req, res) => {
    res.status(200).json({ api: "api is working" });
  });
  
module.exports = server;
  