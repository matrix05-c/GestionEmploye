import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <div>
            <NavBar />

            <main style={{ backgroundColor: "red" }}>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout