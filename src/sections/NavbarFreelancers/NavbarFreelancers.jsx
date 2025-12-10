import styles from "./NavbarFreelancers.module.scss";
import Button from "../../components/Button";
import Logotipo1 from "../../components/Logotipo1";

const NavbarFreelancers = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className={styles.NavbarFreelancers}>

            <div className={styles.NavbarFreelancersContent__logotipo}>
                <Logotipo1 color="var(--maiz)" width="2.2rem" height="auto" onClick={() => scrollToSection("Hero")}/>
            </div>

            <div className={styles.NavbarFreelancersContent__buttons}>

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
                    onClick={() => scrollToSection("ImpulzzeFreelancers")}
                />
                <Button
                    text="Sumarme"
                    backgroundColor="var(--clear)"
                    hoverColor="var(--salmon)"
                    fontSize="var(--font-small)"
                    onClick={() => scrollToSection("RegistrarFreelancers")}
                />

            </div>

        </nav>
    );
};

export default NavbarFreelancers;
