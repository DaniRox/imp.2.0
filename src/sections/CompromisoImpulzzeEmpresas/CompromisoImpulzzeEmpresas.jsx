import { useRef, useEffect, useState } from "react";
import styles from "./CompromisoImpulzzeEmpresas.module.scss";
import Group1 from "../../components/Group1";


const CompromisoImpulzzeEmpresas = () => {
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
        <section className={styles.CompromisoImpulzzeEmpresas} id="CompromisoImpulzzeEmpresas">
            <h2 className={styles.CompromisoImpulzzeEmpresasContent__title}>Somos tu CHRO  para <span className={styles.highlighted}>impulzzar</span> el crecimiento de tu empresa.</h2>

            <div className={styles.CompromisoImpulzzeEmpresasContent}>
                <div className={styles.CompromisoImpulzzeEmpresasContent__video}>
                    <video
                        ref={videoRef}
                        // Usamos una clase dinámica para controlar la visibilidad
                        className={`${styles.video} ${isVideoActive ? styles.active : ''}`}
                        muted
                        loop
                        playsInline
                        // Eliminamos autoPlay y lo controlamos con .play()
                    >
                        <source src="https://www.impulzze.com/videos/WorkingTeamImpulzze.mp4" type="video/mp4" />
                        Tu navegador no soporta la etiqueta de video.
                    </video>
                </div>

                <div className={styles.CompromisoImpulzzeEmpresasContent__text}>
                    <p className={styles.text}>
                        Consultoría de <span className={styles.highlighted}>Recursos Humanos + Talento Global + People Operations</span>. Todo en un solo lugar.<br></br>
                        <br></br>Para <span className={styles.highlighted}>startups, pequeñas y medianas empresas</span> que quieren crecer con orden, rapidez y estrategia.
                    </p>
                </div>

                <div className={styles.CompromisoImpulzzeEmpresasContent__shapes}>
                    {/* Uso correcto del componente Group1 */}
                    <Group1
                        width="150"
                        height="auto"
                    />
                </div>
            </div>
            <h2 className={styles.CompromisoImpulzzeEmpresasContent__title2}>Crecimiento sin dolores de cabeza, RRHH con estrategia.</h2>
        </section>
    );
};

export default CompromisoImpulzzeEmpresas;
