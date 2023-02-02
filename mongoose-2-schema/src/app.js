const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/practice-db";
mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const studentSchema = mongoose.Schema({
  name: String,
  rollno: {
    type: Number,
    required: true,
    },
  date: {
    type: Date,
    default: Date.now,
    },
});

const student = new mongoose.model("Student", studentSchema);

const createStudent = new student({
  name: "uv",
  rollno: 16,
});

createStudent.save();
