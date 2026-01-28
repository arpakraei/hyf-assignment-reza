import express from "express";

import readRoutes from "./user.read.js";
import deleteRoutes from "./user.delete.js"
import updateRoutes from "./user.update.js";

const router=express.Router();

router.use(readRoutes)
router.use(deleteRoutes);
router.use(updateRoutes);


export default router;