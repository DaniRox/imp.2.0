import styles from "./ImpulzzeEmpresas.module.scss";
import { CardEmpresas,  CardEmpresas2 } from "../../components/CardEmpresas";
import { Talento, Agilidad, Recursos } from "../../components/Icons";
import ArrowLeft from "../../components/ArrowLeft";
import ArrowRight from "../../components/ArrowRight";
import Button from "../../components/Button";
import HalfCircle from "../../components/HalfCircle";


const ImpulzzeEmpresas = () => {
{/**
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
*/}
    return (
        <section className={styles.ImpulzzeEmpresas} id="ImpulzzeEmpresas">
            <h1 className={styles.ImpulzzeEmpresas__title}>Que servicios ofrecemos?</h1>


            <ArrowLeft
                size={80}
                color="var(--salmon)"
                className={styles.arrowLeft}
            />

            <ArrowRight
                size={80}
                color="var(--salmon)"
                className={styles.arrowRight}
            />

            <div className={styles.ImpulzzeEmpresasContent}>

                <CardEmpresas
                    Icon={Talento}
                    title="CHRO as a Service"
                    text={
                        <>
                        Te acompañamos como departamento de RRHH completo:
                        <ul>
                            <li>Estructura organizacional</li>
                            <li>Cultura, engagement y clima laboral</li>
                            <li>Políticas y procedimientos</li>
                            <li>People Operations</li>
                            <li>Procesos de onboarding / offboarding</li>
                            <li>Gestión de desempeño</li>
                            <li>Planes de carrera</li>
                            <li>Employer Branding</li>
                        </ul>
                        </>
                    }
                />

                <CardEmpresas2
                    Icon={Agilidad}
                    title="Talent Acquisition"
                    text={
                        <>
                        Freelance, temporal o permanente: cubrimos lo que tu empresa necesita.<br /><br />
                        Procesos de selección eficientes, transparentes y centrados en la calidad.<br /><br />
                        Encontramos talento verificado, rápido y especializado en tus necesidades.<br /><br />
                        <p className={styles.text__highlighted} >Cumplimos en 30 días.</p><br />
                        <p className={styles.text__highlighted} >Con garantía por 6 meses.</p>
                        </>
                    }
                />

                <CardEmpresas
                    Icon={Recursos}
                    title="Consultoría Estratégica de RRHH"
                    text={
                        <>
                        <p className={styles.text__highlightedcenter}>
                            Entendemos tus desafíos:<br /><br />
                            Diagnóstico completo de tu área de personas y empreasa.<br /><br />
                            Diseñamos hoja de ruta y mejoras implementables desde el primer mes.<br /><br />
                            <p className={styles.text__highlighted} >Flexibilidad y adaptabidad para acompañar tu expansión</p>
                        </p>
                        </>
                    }
                />
            </div>

            <span className={styles.span}>Somos el partner estratégico con experiencia Global que mereces y necesitas.</span>

{/**
            <div className={styles.ImpulzzeEmpresasContent__Button}>
                <div className={styles.ContentButton}>
                    <HalfCircle
                        size={80}
                        color="var(--purple)"
                        className={styles.halfCircle}
                    />


                    <Button
                        text="Conoce los Casos de Exito Impulzze"
                        backgroundColor="var(--salmon)"
                        hoverColor="var(--esmerald)"
                        fontSize="var(--font-medium)"
                        onClick={() => scrollToSection("CasosDeExitoEmpresas")}
                    />


                </div>


            </div>
*/}
        </section>
    );
};

export default ImpulzzeEmpresas;
