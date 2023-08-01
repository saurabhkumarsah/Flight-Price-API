import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route.js';
const app = express();

app.use(express.json())
app.use('/', router)

app.listen(3000, () => {
    console.log("Port start on ", 3000)
})

mongoose.connect('mongodb+srv://saurabhsahofficial:21mnzpvnAgVXlrm5@cluster0.gmkmd42.mongodb.net/FlightAPI-DB')
    .then(() => console.log("DB is connected.."))
    .catch((err) => console.log(err))