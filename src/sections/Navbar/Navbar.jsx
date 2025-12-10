import styles from "./Navbar.module.scss";
import Button from "../../components/Button";
import Logotipo1 from "../../components/Logotipo1";

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className={styles.Navbar}>

            <div className={styles.NavbarContent__logotipo}>
                <Logotipo1 color="var(--maiz)" width="2.2rem" height="auto" onClick={() => scrollToSection("Hero")}/>
            </div>

            <div className={styles.NavbarContent__buttons}>

                <Button
                    text="Blog"
                    backgroundColor="var(--salmon)"
                    hoverColor="var(--maiz)"
                    fontSize="var(--font-small)"
                    href=""
                />
                <Button
                    text="Servicios"
                    backgroundColor="var(--clear)"
                    hoverColor="var(--salmon)"
                    fontSize="var(--font-small)"
                    onClick={() => scrollToSection("ImpulzzeEmpresas")}
                />
                <Button
                    text="Talento"
                    backgroundColor="var(--clear)"
                    hoverColor="var(--salmon)"
                    fontSize="var(--font-small)"
                    onClick={() => scrollToSection("")}
                />

            </div>

        </nav>
    );
};

export default Navbar;
