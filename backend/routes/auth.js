const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const SECRET = "secret_key"

router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10)

  const user = new User({
    username: req.body.username,
    password: hash
  })

  await user.save()
  res.json("registered")
})

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username
  })

  if (!user) return res.json("no user")

  const valid = await bcrypt.compare(
    req.body.password,
    user.password
  )

  if (!valid) return res.json("wrong pass")

  const token = jwt.sign(
    { id: user._id, role: user.role },
    SECRET
  )

  res.json({ token, role: user.role })
})

module.exports = router
