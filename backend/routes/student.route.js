// routes/student.route.js
import express from 'express';
import mongoose from 'mongoose';
import Student from '../models/Student.js';

const router = express.Router();

// CREATE
router.post("/", async (req, res, next) => {
    try {
        const data = await Student.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
});

// READ all
router.get("/", async (req, res, next) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        next(err);
    }
});

// READ by ID
router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid student ID" });
        }
        const student = await Student.findById(id);
        if (!student) return res.status(404).json({ error: "Student not found" });
        res.json(student);
    } catch (err) {
        next(err);
    }
});

// UPDATE
router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid student ID" });
        }
        const updated = await Student.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: "Student not found" });
        res.json(updated);
    } catch (err) {
        next(err);
    }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid student ID" });
        }
        const deleted = await Student.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ error: "Student not found" });
        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        next(err);
    }
});

export default router;
