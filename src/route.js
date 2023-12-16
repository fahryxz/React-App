import React from "react";
//const Home = React.lazy(() => import("./Home"))
const FakultasList = React.lazy(()=>import("./Fakultas/List"))
const ProdiList = React.lazy(()=>import("./Prodi/List"))
const MahasiswaList = React.lazy(()=>import("./Mahasiswa/List"))
const FakultasDetail = React.lazy(()=>import("./Fakultas/Detail"))
const FakultasCreate = React.lazy(()=>import("./Fakultas/Create"))
const ProdiCreate = React.lazy(()=>import("./Prodi/Create"))
const FakultasUpdate = React.lazy(()=>import("./Fakultas/Update"))
//const AuthLogin = React.lazy(()=>import("./Auth/Login"))

const routes = [
    //{path: "/", Component: Home},
    //{path: "/login", Component: AuthLogin},
    {path: "/Fakultas", Component: FakultasList},
    {path: "/Prodi", Component: ProdiList},
    {path: "/Prodi/create", Component: ProdiCreate},
    {path: "/Mahasiswa", Component: MahasiswaList},
    {path: "/Fakultas/detail/:fakultasId", Component: FakultasDetail},
    {path: "/Fakultas/create", Component: FakultasCreate},
    {path: "/Fakultas/update/:fakultasId", Component: FakultasUpdate}
]

export default routes