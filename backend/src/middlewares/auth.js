import "dotenv/config";
import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "token not provider" });

  const [, token] = authHeader.split(" ");

  try {
    const payload = jwt.verify(token, process.env.APP_SECRET);

    req.userId = payload.userId;

    return next();
  } catch (err) {
    res.status(401).json({ error: "token invalid" });
  }
};
