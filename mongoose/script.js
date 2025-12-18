import mongoose, { modelNames } from 'mongoose';
import Users from './schemas/User.js';
import Student from './schemas/Student.js';

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

// Create a new user in the database
async function createUser(userObj) {
    try {
        const user = new Users(userObj);
        await user.save();
        console.log(user);
    } catch (err) {
        console.log(err.message); 
    }
}

// Create a new student in the database
async function createStudent(studentObj) {
    try {
        const student = new Student(studentObj);
        await student.save();
        console.log(student);
    } catch (err) {
        console.log(err.message); 
    }
}

// createUser({
//     name: "Ronaldo", 
//     email: "TEST@gmail.com",
//     favoriteFood: "Rice and Beans"
// });

// createStudent({
//     // name: "Ronaldo", 
//     averageGrade: 71, 
// });

async function run() {
    try {
        const user = await Users.findOne().where("name").equals("John Doe");
        user.bestFriend = '6943fd6c798e497e60927089';
        await user.save();
        console.log(user);
    } catch (err) {
        console.log(err.message);     
    }
} 

run();
