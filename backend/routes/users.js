import express from "express";

import { createUser, deleteUser, getUsers, singleUser, updateUser } from "../controllers/user.js";

const router=express.Router();

router.get("/",getUsers);
router.get("/:id",singleUser);
router.post("/",createUser);
router.delete("/:id",deleteUser);
router.put("/:id",updateUser);

export default router;