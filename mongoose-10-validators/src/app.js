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
  
  name:{ 
       type:String,
       trim:true,
       minlength:[3, "Minimum length is 3"]
},
  age:{
       type :Number,
       required:true,
       validate:{
          validator:function(v){
          return v>16 && v<50 ;
       },
       message:"Age is not in allowed range"
      }

  },
  rollno:{
         type:Number,
         required: true
},
  mobileNo:{
           type: Number,
           required: true,
           validate(value){
               if (value.toString().length == 10) {
                  return true;
              }            
                  throw new Error("Mobile no. is incorrect");
         },
},
  date:{
     type: Date,
     default: Date.now,
},

});

const Student = new mongoose.model("Student", studentSchema);

const createDocs = async () => {
  try {
    const newValue = new Student({
      name : "upendra3",
      age: 3,
      rollno:5,
      mobileNo:9876424552,
    });

    const studentData = await newValue.save();

    console.log(studentData);
  } catch (error) {
    console.log(error.message);
  }
};

createDocs();


