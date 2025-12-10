import styles from "./Footer.module.scss";
import Logotipo2 from "../../components/Logotipo2";

const Footer = () => {
    // Función de desplazamiento suave
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterContent}>
                <div className={styles.FooterContent__logotipo}>
                    <Logotipo2 color="var(--esmerald)" width="8rem" height="auto" />
                    <span>Talento global con<br />
                        soluciones innovadoras</span>
                </div>

                <div className={styles.FooterContent__links}>
                    <div className={styles.links__internalLinks}>
                        <a
                            href="#ImpulzzeEmpresas"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("ImpulzzeEmpresas");
                            }}
                            className={styles.link}
                        >
                            Nuestros Servicios
                        </a>
                        <a
                            href="#CompromisoImpulzzeEmpresas"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("CompromisoImpulzzeEmpresas");
                            }}
                            className={styles.link}
                        >
                            Compromiso Impulzze
                        </a>
                        <a
                            href="#SobreImpulzzeEmpresas"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("SobreImpulzzeEmpresas");
                            }}
                            className={styles.link}
                        >
                            Sobre Impulzze
                        </a>
                        <a
                            href="#CasosDeExitoEmpresas"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("CasosDeExitoEmpresas");
                            }}
                            className={styles.link}
                        >
                            Casos de Éxito
                        </a>
                    </div>
                    <div className={styles.links__socialLinks}>
                        <a
                            href="https://www.linkedin.com/company/impulzze/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/impulzze?igsh=MXBzajhhMmc0OGd3Ng%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            Instagram
                        </a>
                        <a
                            href="mailto:jose@impulzze.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            Mail
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.FooterContent__termsYmention}>
                <p>
                    <a href="/terminos" target="_blank">Términos y Condiciones</a>
                </p>
                <p>
                    <a href="https://www.danirox.click/" target="_blank">Diseño y Desarrollo por DaniRox</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

