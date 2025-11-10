import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoute from './routes/student.route.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/students', studentRoute);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB muvaffaqiyatli ulandi"))
    .catch(err => console.error("MongoDB ulanishda xatolik:", err));

app.use((req, res) => res.status(404).send("Error 404: Not Found!"));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server ishlayapti port: ${PORT}`));
