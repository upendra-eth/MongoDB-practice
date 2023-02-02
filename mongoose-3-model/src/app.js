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
        const createStudent = new Student({
            age: 3,
            name: "raaja",
            rollno: 34,
        });

        const studentData = await createStudent.save();
        console.log(studentData);
    } catch (err) {
        console.log(err.message);
    }
}

create_student();
