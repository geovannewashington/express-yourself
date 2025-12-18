import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    averageGrade: {
        type: "Number",
        min: 0,
        max: 100,
        // validate: {
            // note that the value of validator is an anonymous arrow function.
            // validator: grade => grade % 2 == 0,
            // message: props => `${props.value} is not even.`
        // }
    },
});

export default mongoose.model("student", studentSchema);
