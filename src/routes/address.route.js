import express from "express";
import {
    addresses,
    address,
    deleteAddress,
    updateAddress,
    createAddress,
    filterAddress
} from "../controllers/address.controller.js";

const { Router } = express;
const router = Router();

router.get("/", addresses);
router.get("/:id", address);
router.get("/filter/:val", filterAddress);
router.delete("/:id", deleteAddress);
router.put("/:id", updateAddress);
router.post("/", createAddress);

export default router;
