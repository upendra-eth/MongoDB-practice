
// updateOne  // findByIdAndUpdate

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

const updatevalue = async(_id) => {

  try {

    const updatedvalue = await Student.findByIdAndUpdate({_id},{
     $set: { name:"rahuls", rollno:32, age:16}
      },{new:true})

    console.log(updatedvalue)
    
  } catch (error) {

    console.log(error.message)
    
  }

}

updatevalue("63d11b03fe1d180d34c39188")
