import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getallUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../util/verifyToken.js";

const router = express.Router();
//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getallUser);

export default router;