// models/Student.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    rollno: { type: Number, required: true }
}, {
    timestamps: true,
    collection: 'students'
});

// ES Module default export
const Student = mongoose.model('Student', studentSchema);
export default Student;
