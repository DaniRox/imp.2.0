import { useRef, useEffect, useState } from "react";
import styles from "./CompromisoImpulzzeFreelancers.module.scss";
import Group2 from "../../components/Group2";

const CompromisoImpulzzeFreelancers = () => {
    const videoRef = useRef(null);
    const [isVideoActive, setIsVideoActive] = useState(false);

    // Efecto para reproducir el video cuando el componente se monta
    useEffect(() => {
        const videoElement = videoRef.current;

        // Pequeño retraso para asegurar que el DOM esté listo
        const timer = setTimeout(() => {
            if (videoElement) {
                videoElement.play().catch(error => {
                    console.error("Error al intentar reproducir el video automáticamente:", error);
                });
                setIsVideoActive(true); // Lo hacemos visible
            }
        }, 100); // 100ms de retraso

        // Limpieza del temporizador
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={styles.CompromisoImpulzzeFreelancers} id="CompromisoImpulzzeFreelancers">
            <h2 className={styles.CompromisoImpulzzeFreelancersContent__subtitle}>Nuestro compromiso con el Éxito</h2>
            <h1 className={styles.CompromisoImpulzzeFreelancersContent__title}>Impulzze: Te conectamos con empresas que apuestan por talento especializado</h1>

            <div className={styles.CompromisoImpulzzeFreelancersContent}>
                <div className={styles.CompromisoImpulzzeFreelancersContent__shapes}>
                    {/* Uso correcto del componente Group1 */}
                    <Group2 
                        src="@/assets/images/Group1.png" 
                        alt="Descripción de la forma decorativa"
                        className={styles.shapeImage}
                    />                              
                </div>
                <div className={styles.CompromisoImpulzzeFreelancersContent__text}>
                    <p className={styles.text}>
                        Somos expertos en RRHH que hemos trabajado con empresas de todo el mundo. <br />
                        Sabemos EXACTAMENTE lo que buscan.<br />
                        Y te ayudamos a convertirte en el candidato que las empresas sí quieren entrevistar. <br /><br />
                        <p className={styles.textItalic}>
                            En Impulzze, cada conexión es una oportunidad de éxito.
                        </p> 
                    </p>
                </div>

                <div className={styles.CompromisoImpulzzeFreelancersContent__video}>
                    <video
                        ref={videoRef}
                        // Usamos una clase dinámica para controlar la visibilidad
                        className={`${styles.video} ${isVideoActive ? styles.active : ''}`}
                        muted
                        loop
                        playsInline
                        // Eliminamos autoPlay y lo controlamos con .play()
                    >
                        <source src="https://www.impulzze.com/videos/RemoteWorkImpulzze.mp4" type="video/mp4" />
                        Tu navegador no soporta la etiqueta de video.
                    </video>
                </div>
            </div>
            <div className={styles.CompromisoImpulzzeFreelancersContent__spans}>
                <span className={styles.span1}>Visibilidad, crecimiento y proyectos alineados a tus habilidades.</span>
                <span className={styles.span2}>Entrenamiento, estrategia y acompañamiento real, para Impulzzar tu carrera.</span>
            </div>
        </section>
    );
};

export default CompromisoImpulzzeFreelancers;