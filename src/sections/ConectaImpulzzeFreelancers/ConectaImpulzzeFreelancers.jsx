import styles from "./ConectaImpulzzeFreelancers.module.scss";
import Logotipo1 from "../../components/Logotipo1";


const ConectaImpulzzeFreelancers = () => {
    return (
        <section className={styles.ConectaImpulzzeFreelancers} id="ConectaImpulzzeFreelancers">
            <div className={styles.ConectaImpulzzeFreelancers__titles}>
                <h1 className={styles.ConectaImpulzzeFreelancers__title}>Transforma tu visión con el talento correcto.
                Conecta y crea éxito.</h1>
            </div>

            <div className={styles.ConectaImpulzzeFreelancersContent}>
                <div className={styles.ConectaImpulzzeFreelancersContent__shapes}>
                    <Logotipo1
                        src="@/assets/images/Group1.png"
                        alt="Descripción de la forma decorativa"
                        className={styles.shapeImage}
                        color="var(--maiz)"
                    />
                </div>

                <div className={styles.ConectaImpulzzeFreelancersContent__text}>
                    <p className={styles.text}>
                        Sea que necesites talento para tu empresa o quieras llevar tu carrera al siguiente nivel, en Impulzze tienes el punto de partida.

                    </p>
                </div>
            </div>
        </section>
    );
};

export default ConectaImpulzzeFreelancers;

