import styles from "./ComoFuncionaEmpresas.module.scss";
import Button from "../../components/Button";
import ArrowLeft from "../../components/ArrowLeft";
import ArrowRight from "../../components/ArrowRight";


const ComoFuncionaEmpresas = () => {
    return (
        <section className={styles.ComoFuncionaEmpresas}>
            <h1 className={styles.ComoFuncionaEmpresas__title}>¿Como Trabajamos?</h1>

            <span className={styles.span1}>Somos un equipo con experiencia global en RRHH, startups y crecimiento.</span>

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

            <div className={styles.ComoFuncionaEmpresasContent}>
                <div className={styles.ComoFuncionaEmpresasContent__CardCircle1}>
                    <p className={styles.CardCircle__text}>
                        Analizamos tu equipo, tus procesos y tus retos de RRHH para entender exactamente qué necesitas. <br /><br />
                        <p className={styles.highlighted}>
                            Sin suposiciones. Solo datos reales y una visión experta
                        </p>
                    </p>
                </div>

                <div className={styles.ComoFuncionaEmpresasContent__CardCircle2}>
                    <p className={styles.CardCircle__text}>
                        Propuesta personalizada de RRHH + Talento. <br /><br />
                        Diseñamos una solución a medida que combina estrategia, procesos y el talento adecuado. <br /><br />
                        <p className={styles.highlighted}>
                            Lo esencial para que tu equipo crezca con orden, foco y eficiencia.
                        </p>
                    </p>
                </div>

                <div className={styles.ComoFuncionaEmpresasContent__CardCircle3}>
                    <p className={styles.CardCircle__text}>
                        Ejecutamos contigo un plan claro y práctico, optimizando procesos, estructuras y dinámicas de trabajo. Desde las primeras semanas comienzas a ver mejoras reales.<br /><br />
                        <p className={styles.highlighted}>
                            Acción + acompañamiento continuo para que tu empresa avance.
                        </p>
                    </p>
                </div>
            </div>

            <span className={styles.span2}>Tu empresa gana estructura, claridad y orden, sin contratar un equipo interno.</span>

        </section>
    );
};

export default ComoFuncionaEmpresas;
