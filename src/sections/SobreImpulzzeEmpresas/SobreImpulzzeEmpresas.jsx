import styles from "./SobreImpulzzeEmpresas.module.scss";
import Group2 from "../../components/Group2";


const SobreImpulzzeEmpresas = () => {
    return (
        <section className={styles.SobreImpulzzeEmpresas} id="SobreImpulzzeEmpresas">
            <div className={styles.SobreImpulzzeEmpresas__titles}>
                <h2 className={styles.SobreImpulzzeEmpresas__subtitle}>Que es Impulzze?</h2>
                <h1 className={styles.SobreImpulzzeEmpresas__title}>Impulzze: tu departamento de RRHH</h1>
            </div>

            <div className={styles.SobreImpulzzeEmpresasContent}>
                <div className={styles.SobreImpulzzeEmpresasContent__shapes}>
                    <Group2 
                        src="@/assets/images/Group1.png" 
                        alt="Descripción de la forma decorativa"
                        className={styles.shapeImage}
                    /> 
                </div>

                <div className={styles.SobreImpulzzeEmpresasContent__text}>
                    <p className={styles.text}>
                        Somos un equipo con experiencia global en People & Culture, Talent Acquisition, Recruitment,  HR Business Partnering y estrategia de personas. Nos convertimos en el partner de confianza de tu empresa para crear procesos, atraer talento, diseñar cultura, resolver problemas de personas y acompañar tu crecimiento.<br /><br />
                        <span className={styles.highlighted}>En Impulzze, cada conexión es una oportunidad de éxito.</span>
                    </p>
                </div>
            </div>

            <div className={styles.SobreImpulzzeEmpresasContent__spans}>
                <span className={styles.span1}>Somos un equipo con experiencia global en RRHH, startups y crecimiento.</span>
                <span className={styles.span2}>No solo atraemos talento: acompañamos el crecimiento de tu equipo.</span>
            </div>
        </section>
    );
};

export default SobreImpulzzeEmpresas;

