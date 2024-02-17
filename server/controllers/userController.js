
import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelpers.js";
import JWT from "jsonwebtoken";
import ReviewModel from "../models/ReviewModel.js";


// register user

export const registerUser = async (req, res) => {

    try {

        const { name, email, password, userImage } = req.body;
        if (!name) {
            return res.send({ error: "Name is Required" });
        }
        if (!email) {
            return res.send({ error: "email is Required" });
        }
        if (!password) {
            return res.send({ error: "password is Required" });
        }
        if (!userImage) {
            return res.send({ error: "userImage is Required" });
        }

        //check user
        const exisitingUser = await User.findOne({ email });
        //exisiting user
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Register please login",
            });
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new User({
            name,
            email,
            password: hashedPassword,
            userImage,
        }).save();

        res.status(201).json({
            status: "success",
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Errro in Registeration",
            error,
        });

    }

};




// login user

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }

        //check user

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registerd",
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        }
        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                userImage: user.userImage,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
};


// join with google

export const googleSignIn = async (req, res) => {
    try {
        const { name, email, userImage, password } = req.body;


        const existingUser = await User.findOne({ email });


        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already registered, please login",
            });
        }
        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

        const hashedPassword = await hashPassword(generatedPassword);

        const user = await new User({
            name,
            email,
            password: hashedPassword,
            userImage,
            token,
        }).save();

        res.status(201).json({
            status: "success",
            success: true,
            message: "User registered successfully",
            user,

        });
    } catch (error) {
        // console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error,
        });
    }
};

// Forgot Password


export const forgotPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        if (!email) {
            res.status(400).send({ message: "Emai is required" });
        }
        if (!newPassword) {
            res.status(400).send({ message: "New Password is required" });
        }
        //check
        const user = await User.findOne({ email });
        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Wrong Email",
            });
        }
        const hashed = await hashPassword(newPassword);
        await User.findByIdAndUpdate(user._id, { password: hashed });
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error,
        });
    }
};


//update prfole

export const updateProfileController = async (req, res) => {
    try {
        const { name, userImage, email, address } = req.body;
        const user = await User.findById(req.user._id);

        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            {
                name: name || user.name,
                email: email || user.email,
                userImage: userImage || user.userImage,
                address: address || user.address,


            },
            { new: true }
        );
        res.status(200).send({
            success: true,
            message: "Profile Updated SUccessfully",
            updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error WHile Update profile",
            error,
        });
    }
};



///////////////////  Review


// CREATE Review 

export const createReview = async (req, res) => {
    try {
        const { name, rating, message } = req.body;

        const review = new ReviewModel({ ...req.body });

        await review.save();
        res.status(201).send({
            success: true,
            message: "Product Created Successfully",
            review,
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
// get all Review

export const getReviewController = async (req, res) => {
    try {
        const reviews = await ReviewModel
            .find({}).sort({ createdAt: -1 });

        res.status(200).send({
            success: true,
            counTotal: reviews.length,
            message: "ALlProducts ",
            reviews,
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
