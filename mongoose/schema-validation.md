# Schema Validation Chapter

In mongoose when creating a schema besides just validating the type of that field, we can actually
do some more sofisticated validation by passing an object.

Example:

```javascript
const studentSchema = new mongoose.Schema{
    averageGrade: {
        type: "Number",
        min: 0,
        max: 100,
        validate: {
            // note that the value of validator is an anonymous arrow function.
            validator: grade => grade % 2 == 0,
            message: props => `${props.value} is not even.`
        }
    }
};
```

Note: the keys inside the object that defines `averageGrade` cannot change, they are defined by
mongoose itself. You could not call `validate` something else for instance.

In mongoose, the validation that we define on the schemas are only going to work when we use methods
such as `.save` and `.create`, the other built-in `mongodb` built-in methods don't do it, such as
`.findAndReplace`.
