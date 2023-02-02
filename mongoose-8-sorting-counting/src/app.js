
// Logical operators

// $and  - Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// $not  - Inverts the effect of a query expression and returns documents that do not match the query expression.
// $nor  - Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
// $or  - Joins query clauses with a logical OR returns all documents that match the conditions of either clause.


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

    // we are using logical opperation and here
     const studentData = await Student.find({$and:[{rollno:4},{name : "raaja"}]}).select({name:1,_id:0});

     const studentData2 = await Student.find({rollno:4}).select({name:1,_id:0});

     const studentData1 = await Student.find({$or:[{rollno:4},{name : "raaja"}]}).select({name:1,_id:0});
     const studentData3 = await Student.find({$nor:[{rollno:4},{name : "raaja"}]}).select({name:1,_id:0});

    // count no of documents
     const studentData4 = await Student.find({rollno:{$not:{$gt:10}}}).select({name:1,_id:1, rollno:1}).countDocuments();

     // shorting  // 1 for accending and -1 for decending

     const studentData5 = await Student.find({}).select({name:1,_id:0,rollno:1}).sort({rollno:-1});



    
  
      console.log(studentData);
      console.log("................................................................studentData2");
      console.log(studentData2);
      console.log("...........................................................studentData1");
      console.log(studentData1);
      console.log("................................................. .nor.............................................................");
      console.log(studentData3);

      console.log("...................................................count().............................................................");
      console.log(studentData4);

      console.log("...................................................sort().............................................................");
      console.log(studentData5);
      
  } catch (err) {
    console.log(err.message);
  }
};
findStudents();
