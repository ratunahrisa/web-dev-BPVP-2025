import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'

function EditSiswa() {

    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        getSiswaById()
    }, [])

    const getSiswaById = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/siswa/${id}`)
            setNama(response.data.siswa.nama)
            setUmur(response.data.siswa.umur)
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }

    const updateSiswa = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/siswa/${id}`, {
                nama,
                umur: Number(umur)
            });
            navigate('/')
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }



  return (
    <div className="flex flex-col container mx-auto">
        <div className='flex justify-between items-center my-6'>
            <Link to={'/'}>
                <FaArrowLeft className='cursor-pointer'/>
            </Link>
            <h1 className='text-2xl font-semibold'>Tambah Siswa</h1>
            <div className="w-6"></div>
        </div>

        
        <div className="flex w-full justify-center">
            <div className="w-md p-6 shadow-md rounded-xl">
                <form onSubmit={updateSiswa}>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="nama" className='mb-1'>Nama Siswa</label>
                        <input 
                            type="text"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className='border py-1 rounded border-gray-300 p-2'
                            placeholder='Masukkan nama siswa' 
                            />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="umur" className='mb-1'>Umur Siswa</label>
                        <input 
                            type="number"
                            value={umur}
                            onChange={(e) => setUmur(e.target.value)}
                            className='border py-1 rounded border-gray-300 p-2'
                            placeholder='Masukkan umur siswa' 
                            />
                    </div>

                    <button className='bg-gray-700 hover:bg-gray-800 rounded text-white w-full p-2 cursor-pointer mt-2 font-semibold'>Simpan</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default EditSiswa