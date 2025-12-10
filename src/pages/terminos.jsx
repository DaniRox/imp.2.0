import Head from 'next/head';
import styles from "@/pages/terminos.module.scss"

export default function Terminos() {
    return (
        <>
        <Head>
            <title>Términos y Condiciones</title>
            <meta name="description" content="Consulta nuestros términos y condiciones." />
        </Head>
        <div className={styles.Terminos}>
            <h1 className={styles.title}>Términos y Condiciones</h1>
            <h2 className={styles.subtitle}>1. Aceptación de los términos</h2>
            <p className={styles.text}>
            Bienvenido a <strong>Impulzze</strong>. Al registrarte y utilizar nuestra plataforma, aceptas cumplir con estos términos y condiciones.
            Si no estás de acuerdo, por favor no utilices nuestros servicios.
            </p>

            <h2 className={styles.subtitle}>2. Descripción del servicio</h2>
            <p className={styles.text}>
            Impulzze es una plataforma que conecta freelancers con clientes que buscan servicios profesionales.
            Nuestro objetivo es facilitar la comunicación y gestión de proyectos de manera segura y eficiente.
            </p>

            <h2 className={styles.subtitle}>3. Registro y cuentas</h2>
            <p className={styles.text}>
            Para acceder a ciertos servicios de Impulzze, es necesario registrarse con una cuenta.
            Al hacerlo, te comprometes a proporcionar información veraz y mantener la seguridad de tus credenciales.
            Impulzze no se hace responsable de accesos no autorizados debido al mal uso de la cuenta.
            </p>

            <h2 className={styles.subtitle}>4. Responsabilidades del usuario</h2>
            <p className={styles.text}>
            Los usuarios deben utilizar la plataforma de forma legal y ética.
            Está prohibido publicar contenido ofensivo, fraudulento o que infrinja derechos de terceros.
            Cualquier incumplimiento podrá resultar en la suspensión o eliminación de la cuenta.
            </p>

            <h2 className={styles.subtitle}>5. Contratación y pagos</h2>
            <p className={styles.text}>
            Impulzze facilita la conexión entre clientes y freelancers, pero no interviene en los acuerdos financieros.
            Los pagos y condiciones de trabajo deben ser acordados entre ambas partes.
            Impulzze no se hace responsable de disputas económicas entre usuarios.
            </p>

            <h2 className={styles.subtitle}>6. Propiedad intelectual</h2>
            <p className={styles.text}>
            Todo contenido publicado en la plataforma, incluyendo perfiles, portafolios y proyectos, es propiedad de sus respectivos autores.
            Sin embargo, Impulzze se reserva el derecho de eliminar contenido que infrinja derechos de terceros o incumpla estos términos.
            </p>

            <h2 className={styles.subtitle}>7. Limitación de responsabilidad</h2>
            <p className={styles.text}>
            Impulzze no garantiza el éxito de los proyectos ni la calidad del trabajo realizado por los freelancers.
            No nos hacemos responsables por daños o pérdidas derivados del uso de la plataforma.
            </p>

            <h2 className={styles.subtitle}>8. Modificaciones en los términos</h2>
            <p className={styles.text}>
            Nos reservamos el derecho de actualizar estos términos en cualquier momento.
            Te notificaremos sobre cambios importantes a través de la plataforma o por correo electrónico.
            </p>

            <h2 className={styles.subtitle}>9. Contacto</h2>
            <p className={styles.text}>
            Si tienes preguntas o necesitas más información, puedes contactarnos en <strong>jose@impulzze.com</strong>.
            </p>
        </div>
        </>
    );
}
