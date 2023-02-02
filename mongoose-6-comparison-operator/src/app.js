// Comparison operators
// For comparison of different BSON type values, see the specified BSON comparison order.


// $eq - Matches values that are equal to a specified value.
// $gt -Matches values that are greater than a specified value.
// $gte - Matches values that are greater than or equal to a specified value.
// $in -Matches any of the values specified in an array.
// $lt -Matches values that are less than a specified value.
// $lte -Matches values that are less than or equal to a specified value.
// $ne -Matches all values that are not equal to a specified value.
// $nin -Matches none of the values specified in an array.


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
    //  const studentData = await Student.find({name:"uv"}).select({name:1,_id:0});
  
      console.log(studentData);
  } catch (err) {
    console.log(err.message);
  }
};
findStudents();
