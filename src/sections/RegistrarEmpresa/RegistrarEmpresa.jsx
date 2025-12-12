import { useState } from "react";
import { db, collection, addDoc } from "@/lib/firebase";
import styles from "./RegistrarEmpresa.module.scss";
import emailjs from "@emailjs/browser";

const RegistrarEmpresa = () => {
    const [formData, setFormData] = useState({
        empresa: "",
        contacto: "",
        email: "",
        pais: "",
        industria: "",
        talento: "",
        proyecto: "",
    });

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        // Guardar datos en Firebase
        await addDoc(collection(db, "empresasRegistradas"), {
            ...formData,
            timestamp: new Date(),
        });

        // Datos del formulario para EmailJS
        const templateParams = {
            empresa: formData.empresa,
            contacto: formData.contacto,
            email: formData.email,
            pais: formData.pais,
            industria: formData.industria,
        };

        // Enviar correo con EmailJS
        await emailjs.send(
            "service_9g69neg",
            "template_ci2zezs",
            templateParams,
            "d4NQOWbtLhhfJ_82K"
        );

        // Mostrar mensaje de éxito
        alert("Formulario enviado correctamente");
        console.log("Correo enviado y datos guardados en Firebase");

        // Limpiar el formulario
        setFormData({
            empresa: "",
            contacto: "",
            email: "",
            pais: "",
            industria: "",
        });
        } catch (error) {
        // Mostrar mensaje de error
        console.error("Error al enviar el formulario:", error);
        alert("Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.");
        }
    };

    return (
        <section className={styles.RegistrarEmpresa} id="RegistrarEmpresa">
        <div className={styles.RegistrarEmpresa__titles}>
            <h1 className={styles.RegistrarEmpresa__title}>
                Contactanos y creemos soluciones juntos
            </h1>
            <h2 className={styles.RegistrarEmpresa__subtitle}>
                Completa la información, nuestro equipo de profesionales te contactarán en menos de 48 horas.
            </h2>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.col1}>
            <input
                type="text"
                name="empresa"
                placeholder="Nombre de la empresa"
                className={styles.formInput}
                value={formData.empresa}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="contacto"
                placeholder="Nombre de contacto"
                className={styles.formInput}
                value={formData.contacto}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email corporativo"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div className={styles.col2}>
            <input
                type="text"
                name="pais"
                placeholder="País"
                className={styles.formInput}
                value={formData.pais}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="industria"
                placeholder="Industria"
                className={styles.formInput}
                value={formData.industria}
                onChange={handleChange}
                required
            />
            <input
                type="submit"
                className={styles.formSubmit}
                value="Quiero que me contacten"
            />
            </div>
        </form>
        </section>
    );
};

export default RegistrarEmpresa;
