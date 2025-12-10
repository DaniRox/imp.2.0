import styles from "./ComunidadImpulzzeFreelancers.module.scss";
import Group4 from "../../components/Group4";


const ComunidadImpulzzeFreelancers = () => {
    return (
        <section className={styles.ComunidadImpulzzeFreelancers} id="ComunidadImpulzzeFreelancers">
            <div className={styles.ComunidadImpulzzeFreelancers__titles}>
                <h2 className={styles.ComunidadImpulzzeFreelancers__subtitle}>Nuestra Comunidad</h2>
                <h1 className={styles.ComunidadImpulzzeFreelancers__title}>Impulzzer: Se parte del Talento Global, Freelance, y Remoto</h1>
            </div>

            <div className={styles.ComunidadImpulzzeFreelancersContent}>
                <div className={styles.ComunidadImpulzzeFreelancersContent__shapes}>
                    <Group4
                        src="@/assets/images/Group1.png"
                        alt="Descripción de la forma decorativa"
                        className={styles.shapeImage}
                    />
                </div>

                <div className={styles.ComunidadImpulzzeFreelancersContent__text}>
                    <p className={styles.text}>
                        Ser freelance y talento Global no es un camino solitario. Unete a la comunidad global de freelancers y profesionales que ya están trabajando remoto o en empresas internacionales.<br />
                        Beneficios Impulzzer: <br />
                        Entrenamientos <br />
                        Chat comunidad  <br />
                        Lista semanal de oportunidades remotas verificadas <br />
                        Networking con profesionales de diferentes países <br />
                        Acceso prioritario a proyectos y búsquedas de empresas clientes de Impulzze <br /> <br />
                        <span className={styles.highlighted}>En Impulzze, somos Impulzzers que impulsamos Empresas.</span>
                    </p>
                </div>
            </div>

            <div className={styles.ComunidadImpulzzeFreelancersContent__spans}>
                <span className={styles.span1}>Ser Impulzzer es formar parte de comunidad Freelance.</span>
                <span className={styles.span2}>Te conectamos con Proyectos freelance, oportunidades globales freelance.</span>

            </div>
        </section>
    );
};

export default ComunidadImpulzzeFreelancers;

