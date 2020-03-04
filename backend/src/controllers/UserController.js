import "dotenv/config";
import User from "../models/User";
import bcrypt from "bcryptjs";

export default {
  async index(req, res) {
    const users = await User.paginate(
      {},
      {
        limit: 10,
        page: req.query.page || 1,
        sort: "-createdAt"
      }
    );

    return res.json({ users });
  },

  async show(req, res) {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ error: "User not exists" });

    return res.json({ user });
  },

  async store(req, res) {
    const user = await User.create({ ...req.body });

    return res.json({ user });
  },

  async update(req, res) {
    const id = await User.findById(req.params.id);

    if (!id) {
      return res.status(400).json({ error: "User not exists" });
    }

    req.body.password = await bcrypt.hash(req.body.password, 8);

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true
    });

    return res.json({ user });
  },
  async destroy(req, res) {
    await User.findByIdAndDelete(req.params.id);

    return res.json({ deleted: true });
  }
};
