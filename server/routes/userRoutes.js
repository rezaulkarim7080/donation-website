import express from "express";
import { isAdmin, isAuthenticatedUser } from "../middleware/auth.js";
import { createReview, forgotPassword, getReviewController, googleSignIn, loginUser, registerUser, updateProfileController, } from "../controllers/userController.js";



const router = express.Router();

// main parts 
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google", googleSignIn);

//Forgot Password || POST
router.post("/forgot-password", forgotPassword);



// //protected user route auth
router.get("/user-auth", isAuthenticatedUser, (req, res) => {
    res.status(200).send({ ok: true });
});

// //protected Admin route auth
router.get("/admin-auth", isAuthenticatedUser, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

// //update profile
router.put("/profile", isAuthenticatedUser, updateProfileController);

/// review
// createReview
// getReviewController
router.post("/create-review", createReview);

// // user orders
router.get("/reviews", getReviewController
);





export default router;
