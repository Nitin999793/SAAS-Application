import bcrypt from "bcryptjs";
import User from "../models/User";
import generateToken from "../utils/generateToken";

export const register = async (req: any, res: any) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed
  });

  res.json({
    user,
    token: generateToken(user.id)
  });
};

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  const user: any = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(400).json({ message: "Wrong Password" });
  }

  res.json({
    token: generateToken(user.id),
    user
  });
};