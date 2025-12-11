import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
});

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: Date,
    updatedAt: mongoose.SchemaTypes.Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
});


export default mongoose.model("users", userSchema); 
