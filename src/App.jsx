// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importacion del Layouts
import MainLayout from "./layout/MainLayout";
import FreelancerLayout from "./layout/FreelancerLayout/FreelancerLayout";

// Importacion las páginas principal y la secundaria de freelancers
import HomePage from "./pages/HomePage";
import FreelancersPage from "./pages/FreelancersPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta principal con su layout estándar */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                </Route>

                {/* Ruta de freelancers con SU PROPIO layout */}
                <Route path="/freelancers" element={<FreelancerLayout />}>
                    <Route index element={<FreelancersPage />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
