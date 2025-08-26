 import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function DataSiswa() {
    const [siswa, setSiswa] = useState([]);

    useEffect(() => {
        getAllSiswa()
    }, [])

    const getAllSiswa = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/siswa`)
            setSiswa(response.data.siswa)
            console.log(response.data.siswa)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteSiswa = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/siswa/${id}`)
            getAllSiswa()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="p-6 container mx-auto">
        <div className="flex justify-center mb-4">
            <h1 className='text-3xl font-bold'>Aplikasi Data Siswa</h1>
        </div>
        <div className="flex justify-end mb-4">
            <Link to={'/add'}>
                <button className='py-2 px-3 bg-gray-600 hover:bg-gray-700 text-white rounded cursor-pointer'>Tambah Produk</button>
            </Link>
        </div>

        <div className="flex justify-center">      
            <table>
                <thead className='bg-gray-400 font-medium text-xs text-white uppercase tracking-wider'>
                    <tr>
                        <th scope='col' className='px-12 py-3'>No</th>
                        <th scope='col' className='px-12 py-3'>Nama</th>
                        <th scope='col' className='px-12 py-3'>Umur</th>
                        <th scope='col' className='px-12 py-3'>Aksi</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                    {siswa.map((s, index) => (
                        <tr key={s.id}>
                            <td className='px-12 py-2 text-center'>{index + 1}</td>
                            <td className='px-12 py-2 text-center'>{s.nama}</td>
                            <td className='px-12 py-2 text-center'>{s.umur}</td>
                            <td className='px-12 py-2 text-center'>
                                <Link to={`edit/${s.id}`}>
                                <button className='px-2 py-1 border-2 border-blue-500 text-sm text-blue-800 hover:border-blue-700 hover:text-blue-700 rounded cursor-pointer mr-2'>Edit</button>
                                </Link>
                                <button onClick={() => deleteSiswa(s.id)} className='px-2 py-1 border-2 border-red-600 text-sm text-red-600 hover:border-red-800 hover:text-red-800 rounded cursor-pointer'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DataSiswa