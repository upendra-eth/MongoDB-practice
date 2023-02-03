// npm i validator

const mongoose = require("mongoose");
const validator = require("validator");
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
  email:{
    type:String,
    required:true,
    unique:true,
    validate(v){
      if(!validator.isEmail(v)){
        throw new Error("Email is invalid")
      }
    }


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
         required: true,
         unique:true,
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
      email:"upendra@gmail.com",
      age: 30,
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


