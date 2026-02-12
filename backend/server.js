const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(
"mongodb+srv://admin:14012011@cluster0.iizzvqy.mongodb.net/moviestream?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

app.use("/api/auth", require("./routes/auth"))
app.use("/api/movie", require("./routes/movie"))

app.listen(5000, () =>
console.log("Server running at http://localhost:5000")
)
