import express from "express";

import { createDonation, getDonationController } from "../controllers/donationController.js";

const router = express.Router();


router.post("/create-donation", createDonation);

router.get("/donations", getDonationController);



export default router;