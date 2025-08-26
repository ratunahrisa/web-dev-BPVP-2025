import axios from 'axios';
import { useState } from 'react';
import {FaArrowLeft} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function TambahSiswa() {
  const [nama, setNama] = useState('');
  const [umur, setUmur] = useState('');
  const navigate = useNavigate();

const tambahSiswa = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`http://localhost:3001/siswa`, {
      nama,
      umur: Number(umur)
    });
    navigate('/');
  } catch (error) {
    console.log(error)
  }  
}

const goBack = () => {
  navigate('/')
}

  return (
    <div className="p-6 container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <FaArrowLeft onClick={goBack} className='mr-2 cursor-pointer'/>
        <h1 className='text-2xl font-bold'>Tambah Siswa</h1>
        <div className="w-6"></div>
      </div>

      <form onSubmit={tambahSiswa} className='w-full max-w-lg mx-auto p-4 rounded-lg shadow-md'>
        
        <div className="mb-4">
          <label htmlFor="name" className='block text-gray-700 mb-2'>Name</label>
            <input 
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder='Masukkan nama siswa'
              className='border border-gray-400 rounded w-full py-2 px-3'
            />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className='block text-gray-700 mb-2'>Umur</label>
            <input 
              type="number"
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
              placeholder='Masukkan umur siswa'
              className='border border-gray-400 rounded w-full py-2 px-3'
            />
        </div>

        <div className="flex items-center justify-center">
          <button
            className='px-3 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white cursor-pointer'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default TambahSiswa