import Product from "../models/productModel.js";
import slugify from "slugify";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();



// CREATE Services 

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, photo, comments } = req.body;

        const products = new Product({ ...req.body });

        await products.save();
        res.status(201).send({
            success: true,
            message: "Product Created Successfully",
            products,
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

export const getAllProduct = async (req, res) => {
    try {
        const products = await Product
            .find({})
            .populate("name")
            // .select("-photo")
            .select("+photo")
            .limit(12)
            .sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            counTotal: products.length,
            message: "ALlProducts ",
            products,
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

// get single product
export const getSingleProductController = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).select("+photo")
        res.status(200).send({
            success: true,
            message: "Single Product Fetched",
            product
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng single product",
            error,
        });
    }
};




// // product count
export const productCountController = async (req, res) => {
    try {
        const total = await Product.find({}).estimatedDocumentCount();
        res.status(200).send({
            success: true,
            total,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Error in product count",
            error,
            success: false,
        });
    }
};

// // product list base on page

export const productListController = async (req, res) => {
    try {
        const perPage = 3;
        const page = req.params.page ? req.params.page : 1;
        const products = await Product
            .find({})
            .select("+photo")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "error in per page ctrl",
            error,
        });
    }
};



