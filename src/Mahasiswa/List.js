import routes, {useEffect,useState } from "react"
import Axios from "axios"
const List = () => {
    const [mahasiswa, setMahasiwa] = useState([])
    useEffect(() => {
        Axios.get("https://apimi5a.vercel.app/mahasiswa")
        .then((res) => {
            const {data} = res
            setMahasiwa(data)
            console.log(res)
        })
        .catch((error) => {
            alert(error)
        })
    }, [])
    return(
        <>
            <h2>Halaman List Mahasiswa</h2>
            <table className="table table-striped">
                <thead>
                    <tr><th>Nama Mahasiswa</th> <th>Nama Prodi</th></tr>
                </thead>
                <tbody>
                    {mahasiswa && mahasiswa.map(
                        (prodi, index) => {
                            return(
                                <tr>
                                    <td>
                                        {mahasiswa.nama}
                                    </td>
                                    <td>
                                        {mahasiswa.prodi.nama}
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