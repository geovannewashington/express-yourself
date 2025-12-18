import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: Number,
    email: {
        type: String,
        minLength: 10,
        lowercase: true,
    },
    createdAt: Date,
    updatedAt: mongoose.SchemaTypes.Date,
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    hobbies: [String],
    address: addressSchema,
    favoriteFood: {
        type: String, 
        default: () => "Pasta",
    },
});

export default mongoose.model("users", userSchema); 
