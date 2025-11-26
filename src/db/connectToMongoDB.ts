import mongoose from 'mongoose';
mongoose.Promise = Promise;
const uri: string = "mongodb://127.0.0.1:27017/tshop";
const mongoDBURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/tshop';
export async function connectMongoose() {
    try {
        await mongoose.connect(uri);
        console.log("Connected successfully to MongoDB with Mongoose");

    } catch (error) {
        console.error("Error connecting to MongoDB with Mongoose:", error);
    }
}

