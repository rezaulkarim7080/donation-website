


import dotenv from "dotenv";
import Donation from "../models/donationModel.js";


dotenv.config();

// CREATE Product 

export const createDonation = async (req, res) => {
    try {
        const { name, email, phone, amount, message } = req.body;

        const donation = new Donation({ ...req.body });

        await donation.save();
        res.status(201).send({
            success: true,
            message: "donation Created Successfully",
            donation,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in crearing product",
        });
    }

};

// get all product

export const getDonationController = async (req, res) => {
    try {
        const donations = await Donation
            .find({})

        res.status(200).send({
            success: true,
            counTotal: donations.length,
            message: "ALlProducts ",
            donations,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting products",
            error: error.message,
        });
    }

};

