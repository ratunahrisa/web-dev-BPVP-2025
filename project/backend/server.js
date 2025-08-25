import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import siswaRoute from "./routes/siswa.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(siswaRoute);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running in port  ${PORT}`)
})