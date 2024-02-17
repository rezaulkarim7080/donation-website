import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },

    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
)



const Donation = mongoose.model('Appointment', donationSchema);

export default Donation;