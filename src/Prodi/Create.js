import { Axios } from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
const Create = () => {
    const navigate = useNavigate()
    const [prodi, setProdi] = useState({
        nama: ""
    })
    const [fakultas, setFakultas] = useState([])

    const handleChange = (e, name) => {
        const value = e.target.value
        setProdi({...prodi,[name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
          await  Axios.post("https://apimi5a.vercel.app/prodi",prodi)
            .then((res) => {
                alert('Prodi berhasil disimpan')
                navigate("/prodi")
            })
        }
        catch (error) {
            alert(error)
        }
    }
    return(
        <>
            <h2>Halaman Create Prodi</h2>
            <form>
               <div className="form-group mb-2">
                <label>Nama Fakultas</label>
                <input type="text" value={prodi.nama} onChange={(e) => handleChange(e, "nama")}
                className="form-control" placeholder="Input Nama Prodi"/>
               </div>
                <div className="form-group mb-2">
                    <label>Fakultas</label>
                    <select value={prodi.fakultas} onChange={(e) => handleChange(e, "fakultas")} className="form-control">
                        <option>Pilih</option>
                        {fakultas && fakultas.map((fakultas, index) =>{
                            return(
                                <option value={fakultas._id}>{fakultas.nama}</option>
                            )
                        })}
                    </select>
                </div>
                <button onClick={handleSubmit} className="btn btn-ptimary">Simpan</button>
            </form>
        </>
    )
}
export default Create