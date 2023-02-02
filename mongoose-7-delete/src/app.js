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

const findStudents = async () => {
  try {
     const studentData = await Student.find({ rollno: {$eq:34}}).select({name:1,_id:0});
    //  const studentData = await Student.find({ rollno: {$eq:34}}).select({name:1,_id:0}).count();
    //  const studentData = await Student.find({name:"uv"}).select({name:1,_id:0});
  
      console.log(studentData);
  } catch (err) {
    console.log(err.message);
  }
};
findStudents();
