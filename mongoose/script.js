import mongoose from 'mongoose';
import Users from './schemas/User.js';

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

// Create a new user in the database
async function createUser(userObj) {
    const user = new Users(userObj);
    user.save();
}

createUser({name: "TposeProgrammer", age: 22});
