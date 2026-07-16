import express from "express";
import { prisma } from "../lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
  const { email, username, password, picture_url, phone } = req.body;

  if (
    typeof email != "string" ||
    typeof username != "string" ||
    typeof password != "string"
  ) {
    return res.status(400).send("Invalid types in form");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (existingUser) {
    return res.status(400).send("User already exists");
  }

  
});

//Login

//Update User

//Delete User
