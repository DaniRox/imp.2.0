import styles from "./ComoFuncionaFreelancers.module.scss";
import ArrowLeft from "../../components/ArrowLeft";
import ArrowRight from "../../components/ArrowRight";


const ComoFuncionaFreelancers = () => {
    return (
        <section className={styles.ComoFuncionaFreelancers}>
            <h1 className={styles.ComoFuncionaFreelancers__title}>Como Funciona?</h1>

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

            <div className={styles.ComoFuncionaFreelancersContent}>
                <div className={styles.ComoFuncionaFreelancersContent__CardCircle1}>
                    <p className={styles.CardCircle__text}>
                        <p className={styles.highlighted}>
                            Diagnostico: <br /><br />
                        </p>
                        Analizamos tu perfil, tus objetivos y el mercado ideal.
                    </p>
                </div>

                <div className={styles.ComoFuncionaFreelancersContent__CardCircle2}>
                    <p className={styles.CardCircle__text}>
                        <p className={styles.highlighted}>
                            Entrenamiento: <br /><br />
                        </p>
                        Plan, herramientas, entregables y recursos adaptados a tu nivel.
                    </p>
                </div>

                <div className={styles.ComoFuncionaFreelancersContent__CardCircle3}>
                    <p className={styles.CardCircle__text}>
                        <p className={styles.highlighted}>
                            Práctica + Acompañamiento continuo <br /><br />
                        </p>
                        Simulacros, correcciones, estrategia y ajustes semana a semana.
                    </p>
                </div>
            </div>

            <span className={styles.span1}>Resultados en 90 días: Más visibilidad, más entrevistas, mayor claridad y más oportunidades.</span>

        </section>
    );
};

export default ComoFuncionaFreelancers;
