// src/sections/Navbar/Navbar.jsx

import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom"; // 1. Importa el hook de navegación
import Button from "../../components/Button";
import Logotipo1 from "../../components/Logotipo1";

const Navbar = () => {
    // 2. Obtén la función navigate
    const navigate = useNavigate();

    // Función para desplazarse a una sección (la que ya tenías)
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // 3. Crea una función específica para ir a la página de freelancers
    const handleNavigateToFreelancers = () => {
        navigate('/freelancers');
    };

    return (
        <nav className={styles.Navbar}>

            <div className={styles.NavbarContent__logotipo}>
                <Logotipo1 color="var(--maiz)" width="2.2rem" height="auto" onClick={() => scrollToSection("Hero")}/>
            </div>

            <div className={styles.NavbarContent__buttons}>

                {/*
                <Button
                    text="Blog"
                    backgroundColor="var(--salmon)"
                    hoverColor="var(--maiz)"
                    fontSize="var(--font-small)"
                    href=""
                />
                */}

                <Button
                    text="Servicios"
                    backgroundColor="var(--clear)"
                    hoverColor="var(--salmon)"
                    fontSize="var(--font-small)"
                    onClick={() => scrollToSection("ImpulzzeEmpresas")}
                />

                {/* 4. Asigna la nueva función al botón "Ser Impulzzer" */}
                <Button
                    text="Ser Impulzzer"
                    backgroundColor="var(--esmerald)"
                    hoverColor="var(--salmon)"
                    fontSize="var(--font-small)"
                    onClick={handleNavigateToFreelancers}
                />

            </div>

        </nav>
    );
};

export default Navbar;
