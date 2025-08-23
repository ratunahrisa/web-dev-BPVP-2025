import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Siswa
export const createSiswa = async (req, res) => {
    try {
        const {nama, umur} = req.body;

        const siswa = await prisma.dataSiswa.create({
            data: {
                nama,
                umur
            }
        });

        res.status(200).json({message: 'Successfully creating new siswa!', siswa})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


// Get All Siswa
export const getAllSiswa = async (req, res) => {
   try {
        const siswa = await prisma.dataSiswa.findMany();

        res.status(200).json({
            message: 'Successfully retrieving data siswa',
            siswa
        });
   } catch (error) {
        res.status(400).json({error: error.message})
   }
};


// Get Siswa by ID
export const getSiswaById = async (req, res) => {
    try {
        const {id} = req.params;

        const siswa = await prisma.dataSiswa.findUnique({
            where: {id: Number(id)}
        });

        if (!siswa) return res.status(404).json({message: `Siswa doesn't exist`});

        res.status(200).json({message: `Successfully retrieving siswa with id: ${id}`, siswa})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// Update Siswa
export const updateSiswa = async(req, res) => {
    try {
        const {id} = req.params;
        const {nama, umur} = req.body;

        const siswa = await prisma.dataSiswa.findUnique({
            where: {id: Number(id)}
        });

        if (!siswa) return res.status(404).json({message: `Siswa doesn't exist`});

        const siswaToUpdate = await prisma.dataSiswa.update({
            where: {id: Number(id)},
            data: {nama, umur}
        });

        res.status(200).json({message: `Sucessfully updating data siswa`, siswaToUpdate});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// Delete Siswa
export const deleteSiswa = async (req, res) => {
    try {
        const {id} = req.params;

        const siswa = await prisma.dataSiswa.findUnique({
            where: {id: Number(id)}
        });

        if (!siswa) return res.status(404).json({message: `Siswa doesn't exist`});

        await prisma.dataSiswa.delete({
            where: {id: Number(id)}
        });

        res.status(200).json({message: `Successfully deleting siswa with id ${id}`});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}