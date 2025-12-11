import styles from "./GarantiaImpulzzeFreelancers.module.scss";
import Group3 from "../../components/Group3";
import Logotipo1 from "../../components/Logotipo1";


const GarantiaImpulzzeFreelancers = () => {
    return (
        <section className={styles.GarantiaImpulzzeFreelancers} id="GarantiaImpulzzeFreelancers">
            <div className={styles.GarantiaImpulzzeFreelancers__titles}>
                <h1 className={styles.GarantiaImpulzzeFreelancers__title}>Garantía Impulzze</h1>
                <h2 className={styles.GarantiaImpulzzeFreelancers__subtitle}>Crea tu perfil y da el primer paso hacia nuevas oportunidades</h2>
            </div>

            <div className={styles.GarantiaImpulzzeFreelancers__Logotipo}>
                <div className={styles.logotipo}>
                    <Logotipo1 color="var(--salmon)" width="9rem" height="auto" />
                </div>
            </div>

            <div className={styles.GarantiaImpulzzeFreelancersContent}>
                <div className={styles.GarantiaImpulzzeFreelancersContent__shapes}>
                    <Group3
                        src="@/assets/images/Group1.png"
                        alt="Descripción de la forma decorativa"
                        className={styles.shapeImage}
                    />
                </div>

                <div className={styles.GarantiaImpulzzeFreelancersContent__text}>
                    <p className={styles.textSubtitle}>
                        Cero riesgo para ti. Seguimos hasta que lo logres.
                    </p>
                    <p className={styles.text}>
                        Si en 90 días no ves avances reales (entrevistas, visibilidad, llamados, oportunidades)…seguimos sin Costo adicional. Porque nuestro foco es acompañarte hasta cumplir con tu objetivo profesional.<br /><br />
                        <span className={styles.highlighted}>En Impulzze, no te dejamos solo. Nunca.</span>
                    </p>
                </div>
            </div>

            <div className={styles.GarantiaImpulzzeFreelancersContent__spans}>
                <span className={styles.span1}>Impulzza tu carrera en 90 días.</span>
                <span className={styles.span2}>Acá te ayudamos a conseguir el trabajo que quieres.</span>
            </div>
        </section>
    );
};

export default GarantiaImpulzzeFreelancers;

