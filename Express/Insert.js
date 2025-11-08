
const mongoose = require('mongoose');

// 1️⃣ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// 2️⃣ Define Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

// 3️⃣ Create Model
const Student = mongoose.model('Student', studentSchema);

// 4️⃣ Insert Record
const newStudent = new Student({
  name: 'Diksha',
  age: 21,
  course: 'Computer Science'
});

newStudent.save()
  .then(() => console.log('Record Inserted Successfully'))
  .catch(err => console.log(err));
