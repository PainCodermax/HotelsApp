import express from "express"
import { countByCity, countByType, createhotel, deletehotel, getallhotel, gethotel, updatehotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotels.js";
import { verifyAdmin } from "../util/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createhotel)

//update
router.put("/:id",verifyAdmin, updatehotel);

//delete
router.delete("/:id",verifyAdmin, deletehotel)

//get
router.get("/find/:id",verifyAdmin, gethotel)

//getall
router.get("/", getallhotel)

router.get("/countByCity",countByCity)
router.get("/countByType",countByType)


export default router