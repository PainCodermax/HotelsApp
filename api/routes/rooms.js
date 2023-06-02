import express from "express"
import { createRoom, deleteRoom, getallRoom, getRoom, updateRoom } from "../controllers/room.js";
import Room from "../models/Room.js";
import Hotel from "../models/Hotels.js";
import { verifyAdmin } from "../util/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid",verifyAdmin, createRoom)

//update
router.put("/:id",verifyAdmin, updateRoom);

//delete
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom)

//get
router.get("/:id",verifyAdmin, getRoom)

//getall
router.get("/",verifyAdmin, getallRoom)


export default router