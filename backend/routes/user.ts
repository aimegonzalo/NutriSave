import express from "express";
import { prisma } from "../lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
  const { email, username, password, picture_url, phone } = req.body;

  // typeof validations
  if (
    typeof email != "string" ||
    typeof username != "string" ||
    typeof password != "string"
  ) {
    return res.status(400).send("Invalid types in form");
  }

  // Username validation
  const existingUser = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (existingUser) {
    return res.status(400).send("User already exists");
  }

  // email validation
  const existingEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (existingEmail) {
    return res.status(400).send("Email already exists");
  }

  //Password Encrypt + New User
  const encryptedPass = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: email,
      username: username,
      password: encryptedPass,
    },
  });

  //JWT
  const token = jwt.sign(
    { id: newUser.id, userName: newUser.username, email: newUser.email },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" },
  );

  //Response
  res.json({ token })
});

//Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  if (typeof username != "string" || typeof password != "string") {
    return res.status(400).send("Invalid types in form");
  }
});
//Update User

//Delete User

export default router;