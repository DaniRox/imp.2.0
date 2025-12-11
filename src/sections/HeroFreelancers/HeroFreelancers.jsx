import React, { useState, useEffect } from "react";
import styles from "./HeroFreelancers.module.scss";
import Logotipo1 from "../../components/Logotipo1";
import Button from "../../components/Button";


const spans = [
    "Nuevas Oportunidades Laborales",
    "Proyectos Globales",
    "Oportunidades Freelance",
];

const HeroFreelancers = () => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const currentPhrase = spans[currentIndex];
        if (letterIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
            setCurrentText(currentPhrase.slice(0, letterIndex + 1)); // Extraemos hasta la letra actual
            setLetterIndex(letterIndex + 1);
        }, 150); // Controla la velocidad de la máquina de escribir
        return () => clearTimeout(timeout);
        } else {
        const timeout = setTimeout(() => {
            setLetterIndex(0);
            setCurrentText("");
            setCurrentIndex((prev) => (prev + 1) % spans.length);
        }, 2000); // Tiempo entre frases
        return () => clearTimeout(timeout);
        }
    }, [letterIndex, currentIndex]);

    return (
        <header className={styles.HeroFreelancers} id="HeroFreelancers">
            <div className={styles.HeroFreelancersContent}>
                <div className={styles.HeroFreelancersContent__text}>
                    <h1 className={styles.h1}>
                        Impulzza tu empresa,<br />
                        Somo tu<br />
                        <span className={styles.animatedText}>
                        {currentText.split("").map((char, index) => (
                            <span
                            key={index}
                            className={styles.letter}
                            style={{
                                animationDelay: `${index * 0.1}s` // Controla el tiempo de animación de cada letra
                            }}
                            >
                            {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                        </span>
                    </h1>
                    <div className={styles.HeroFreelancersContent__buttons}>
                        <Button
                            text={["Conoce nuestros Servicios: ", <br />, "Camino Impulzze"]}
                            backgroundColor="var(--esmerald)"
                            hoverColor="var(--salmon)"
                            fontSize="var(--font-medium)"
                            onClick={() => scrollToSection("ImpulzzeFreelancers")}
                        />
                        <Button
                            text={["Quiero Ser Impulzzer: ", <br />, "Proyectos Globales"]}
                            backgroundColor="var(--maiz)"
                            hoverColor="var(--salmon)"
                            fontSize="var(--font-medium)"
                            onClick={() => scrollToSection("RegistrarFreelancers")}
                        />
                    </div>
                </div>

                <div className={styles.HeroFreelancersContent__Logotipo}>
                    <div className={styles.logotipo}>
                        <Logotipo1 color="var(--purple)" width="9rem" height="auto" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroFreelancers;
