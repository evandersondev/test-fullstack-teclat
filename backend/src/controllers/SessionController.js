import "dotenv/config";
import User from "../models/User";
import bcrypt from "bcryptjs";

export default {
  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.staus(404).json({ error: "User not found" });

    if (!(await bcrypt.compare(password, user.password))) {
      return res.staus(404).json({ error: "Invalid password" });
    }

    return res.json({ user, token: User.generateToken(user) });
  }
};
