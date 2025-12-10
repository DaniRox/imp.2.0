import { Outlet } from "react-router-dom";

import Navbar from "../sections/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";


const MainLayout = () => {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default MainLayout;
