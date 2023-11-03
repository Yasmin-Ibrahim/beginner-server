const express = require('express');
const mongoose = require('mongoose');

let app = express();

async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/center');
    if (!connection) {
     console.log('You have an error')
    } else {
     console.log('DB now is connected')
    }
 }
 connect()


 // schema
 const studentSchema = new mongoose.Schema({
    id : Number,
    name : String,
    age : Number,
    address : String,
    unversity : String,
    faculty : String,
    level : String,
    phone : String
 });
 // convert schema to model (class)
 let studentModel = new mongoose.model("students",studentSchema);
 
//////////////////////////////////

 const courseSchema = new mongoose.Schema({
    nameCourse : String,
    numberCourse : Number,
    typeOfCourses : String,  //online - offline
    areaCourse : String,
    bookPrice :  String,   // yes - no
    coursePrice : String // yes - no
 });
 let courseModel = new mongoose.model("courses",courseSchema);
////////////////////////////////////////////////////////////////////////

let stu1 = new studentModel({
    id : 1,
    name : "yasmin ibrahim",
    age : 20,
    address : "Al-sharkia",
    unversity : "suez canal",
    faculty : "computer science and informatics",
    level : "third",
    phone : "01012345678"
}).save();

let stu2 = new studentModel({
    id : 2,
    name : "farah El-sayed",
    age : 19,
    address : "Al-sharkia",
    unversity : "zagazig",
    faculty : "Arts",
    level : "second",
    phone : "01087654321"
}).save();

let stu3 = new studentModel({
    id : 3,
    name : "mohamed hamdy",
    age : 23,
    address : "cairo",
    unversity : "Ain Shams",
    faculty : "Engineering",
    level : "fourth",
    phone : "01081726354"
}).save();

/////////////////////////@@//////////////////////

let cour_stu1 = new courseModel({
    nameCourse : "Ai",
    numberCourse : 3,
    typeOfCourses : "Offline",  //online - offline
    areaCourse : "Dokki",
    bookPrice :  "No",   // yes - no
    coursePrice : "Yes" // yes - no
}).save();

let cour_stu2 = new courseModel({
    nameCourse : "FrontEnd",
    numberCourse : 1,
    typeOfCourses : "Online",  //online - offline
    areaCourse : "6th of October",
    bookPrice :  "Yes",   // yes - no
    coursePrice : "Yes" // yes - no
}).save();

let cour_stu3 = new courseModel({
    nameCourse : "BackEnd",
    numberCourse : 2,
    typeOfCourses : "Online",  //online - offline
    areaCourse : "Nasr city",
    bookPrice :  "No",   // yes - no
    coursePrice : "No" // yes - no
}).save();

app.listen(3000, function(){
    console.log('server now is opend')
})








// mongoose.connect("mongodb://0.0.0.0:27017/", (err)=>{
//     if (!err) console.log('DB now is connected');
//     else console.log(err)
// })