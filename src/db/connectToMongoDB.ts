import mongoose from 'mongoose';
mongoose.Promise = Promise;
const mongoDBURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/tshop';
export async function connectMongoose() {
    try {
        await mongoose.connect(mongoDBURL);
        console.log("Connected successfully to MongoDB with Mongoose");

    } catch (error) {
        console.error("Error connecting to MongoDB with Mongoose:", error);
    }
}

