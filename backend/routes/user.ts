import express from "express";
import { prisma } from "../lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

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
    return res.status(409).send("User already exists");
  }

  // email validation
  const existingEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (existingEmail) {
    return res.status(409).send("Email already exists");
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
  res.json({ token });
});

//Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // Required fields
  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  //Typeof Data
  if (typeof username != "string" || typeof password != "string") {
    return res.status(400).send("Invalid types in form");
  }

  //Find User
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (!user) {
    return res.status(404).send("User not found");
  }
  //Match password
  const encryptedPass = bcrypt.compareSync(password, user.password);
  if (!encryptedPass) {
    return res.status(400).send("Invalid password");
  }

  //Creates Token
  const token = jwt.sign(
    { id: user.id, name: user.username, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" },
  );

  //response
  res.json({ token, username: user.username, email: user.email });
});

//Update User
router.put("/updateUser/:id", async (req, res) => {
  const { email, username, picture_url, phone } = req.body;
  const id = Number(req.params.id);

  //Validating typeof
  if (
    (email != null && typeof email !== "string") ||
    (username != null && typeof username !== "string") ||
    (picture_url != null && typeof picture_url !== "string") ||
    (phone != null && typeof phone !== "number")
  ) {
    return res.status(400).send("Invalid types in form");
  }

  //Finding User
  const existingUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!existingUser) {
    return res.status(404).send("User not found");
  }

  //Updating Data
  const updateUser = await prisma.user.update({
    where: { id: id },
    data: {
      email: email,
      username: username,
      picture_url: picture_url,
      phone: phone,
    },
  });

  //Response
  res.json(`message: User ${updateUser.username} updated correctly`);
});

//Update User´s Password
router.put("/updatePassword/:id", async (req, res) => {
  const { password } = req.body;
  const id = Number(req.params.id);

  //Validations
  if (password == null) {
    return res.status(400).send("Password is required");
  }
  if (typeof password !== "string") {
    return res.status(400).send("Invalid password type");
  }
  if (password.trim() === "") {
    return res.status(400).send("Password cannot be empty");
  }

  //Finding User
  const existingUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!existingUser) {
    return res.status(404).send("User not found");
  }

  //New Password?
  let currentPass = password;
  const encryptedPass = bcrypt.compareSync(currentPass, existingUser.password);
  if (!encryptedPass) {
    currentPass = await bcrypt.hash(password, 10);
  } else {
    return res.status(400).send("Password cannot be the same as last one");
  }

  //Updating Data
  const updateUser = await prisma.user.update({
    where: { id: id },
    data: {
      password: currentPass,
    },
  });

  //Response
  res.json(`message: Password updated correctly`);
});

//Delete User
router.delete("/deleteUser/:id", async (req, res) => {
  const id = Number(req.params.id);

  //Finding User
  const existingUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!existingUser) {
    return res.status(404).send("User not found");
  }

  //Deleting User
  const deleteUser = await prisma.user.delete({
    where: { id: id },
  });
  res.json(`message: user ${deleteUser.username} deleted correctly`);
});

export default router;
