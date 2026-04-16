import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <div>
            <NavBar />

            <main style={{ marginTop: "20px" }}>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout