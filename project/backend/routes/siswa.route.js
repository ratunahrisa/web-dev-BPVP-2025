import express from "express";
import { getAllSiswa, createSiswa, getSiswaById, updateSiswa, deleteSiswa } from "../controllers/siswa.controller.js";

const siswaRoute = express.Router();

siswaRoute.post('/siswa', createSiswa);
siswaRoute.get('/siswa', getAllSiswa);
siswaRoute.get('/siswa/:id', getSiswaById);
siswaRoute.put('/siswa/:id', updateSiswa);
siswaRoute.delete('/siswa/:id', deleteSiswa);

export default siswaRoute;
