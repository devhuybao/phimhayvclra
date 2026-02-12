const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/moviestream")

app.use("/api/auth", require("./routes/auth"))
app.use("/api/movie", require("./routes/movie"))

app.listen(5000, () =>
  console.log("Server running at http://localhost:5000")
)
