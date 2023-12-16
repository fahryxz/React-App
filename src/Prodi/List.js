import routes, {useEffect,useState } from "react"
import Axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
const List = () => {
    const navigate = useNavigate()
    const [prodi, setProdi] = useState([])
    useEffect(() => {
        Axios.get("https://apimi5a.vercel.app/prodi",{
            headers: {"Authorization": Cookies.get('token')}
        })
        .then((res) => {
            const {data} = res
            setProdi(data)
            console.log(res)
        })
        .catch((error) => {
            alert(error)
        })
    }, [])

    const handleDelete = async (id, nama) => {
        if(window.confirm(`walawe lu olang yakin o mau hapus a : ${nama} ?`)){
            try{
                await Axios.delete(`https://apimi5a.vercel.app/prodi/${id}`)
                .then(window.location.reload())
            }catch (error){
                alert("Error: ", error)
            }
        }
    }

    return(
        <>
            <h2>Halaman List Program Studi</h2>
            <button className="btn btn-primary" onClick={() => navigate('/prodi/create')}>Tambah</button>
            <table className="table table-striped">
                <thead>
                    <tr><th>Nama Program Studi</th> <th>Nama Fakultas</th></tr>
                </thead>
                <tbody>
                    {prodi && prodi.map(
                        (prodi, index) => {
                            return(
                                <tr>
                                    <td>
                                        {prodi.nama ? prodi.nama : null}
                                    </td>
                                    <td>
                                        {prodi.fakultas ? prodi.fakultas.nama : null}
                                    </td>
                                    <td>
                                            <NavLink to={`/fakultas/update/${prodi._id}`} className="btn btn-sm btn-warning">
                                            Ubah </NavLink> &nbsp;
                                            <button className="btn btn-sm btn-danger"
                                             onClick={() => handleDelete(prodi._id, prodi.nama)}>Hapus</button>
                                        </td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </>
    )
}
export default List