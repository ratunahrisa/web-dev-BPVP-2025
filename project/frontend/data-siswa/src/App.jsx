import React, { useState, useEffect } from "react";
import {getAllSiswa} from "./services/siswaService.js"

const App = () => {

const [siswa, setSiswa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSiswa();
        setSiswa(data.siswa); // BE return { message, siswa }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);


  return (
    <>

    <div className="p-4">
      <h1 className="text-violet-700 text-3xl mb-4">Welcome to Data Siswa</h1>
      <ul className="list-disc pl-6">
        {siswa.map((s) => (
          <li key={s.id}>
            {s.nama} - {s.umur}
          </li>
        ))}
      </ul>
    </div>

    </>
  )
}

export default App
