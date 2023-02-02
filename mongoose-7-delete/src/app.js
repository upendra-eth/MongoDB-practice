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



const deleteDocs= async (id_name) => {
  // const data = await Student.deleteOne ({_id:id})
  // const data = await Student.findByIdAndDelete ({_id:id})
  const data = await Student.deleteMany({name:id_name})
  console.log(data);
}

deleteDocs("raaja3")
