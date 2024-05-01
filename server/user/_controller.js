const { v4: uuidv4 } = require("uuid");

const Auth = require("./_modal");
const { setUser } = require("../services/auth");

async function handlesignup(req, res) {
  try {
    const { name, password } = req.body;
    const user = new Auth({
      name: name,
      password: password,
    });
    const User = await user.save();
    if (!User) {
      return res.status(400).json({
        error: "Unable Register.",
      });
    }

    return res.status(200).json({
      message: "registered successfully.",
      data: User.name,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Internal server error",
      errorDetails: error,
    });
  }
}
async function handlelogin(req, res) {
  const { name, password } = req.body;
  const user = await Auth.findOne({ name, password }).select("-password")
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  } else {
    const token=setUser(user)
    return res.json({token})

    
  }
}

module.exports = { handlesignup, handlelogin };
