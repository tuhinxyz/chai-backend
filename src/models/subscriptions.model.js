import mongoose from "mongoose"

const subscriptionsSchema = new mongoose.Schema({
    subscriber:{
        type: mongoose.Schema.Types.ObjectId,// one who subscribing
        ref: "User",
    },
    channel:{
        type: mongoose.Schema.Types.ObjectId,// one to whom 'subscriber' is subscribing
        ref: "User",
    }
},{timestamps: true})

export const Subscriptions = mongoose.model("Subscription",subscriptionsSchema);