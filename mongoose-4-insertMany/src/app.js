const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/practice-db";
mongoose
    .connect(url)
    .then(() => {
        console.log("successfully connected");
    })
    .catch((err) => {
        console.log(err);
    });

studentSchema = new mongoose.Schema({
    age: Number,
    name: String,
    rollno: { type: Number, required: true },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Student = new mongoose.model("Student", studentSchema);

async function create_student() {
    try {
        const createStudent1 = new Student({
            age: 31,
            name: "raaja",
            rollno: 34,
        });
        const createStudent2 = new Student({
            age: 32,
            name: "raaja2",
            rollno: 34,
        });
        const createStudent3 = new Student({
            age: 33,
            name: "raaja3",
            rollno: 34,
        });

        const studentData = await Student.insertMany([createStudent1,createStudent2,createStudent3]);
        console.log(studentData);
    } catch (err) {
        console.log(err.message);
    }
}

create_student();
