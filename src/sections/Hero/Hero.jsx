import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import Logotipo1 from "../../components/Logotipo1";
import Button from "../../components/Button";


const spans = [
    "Partner de RRHH",
    "Especialista de Talento Global",
    "Aliado Estratégico",
];

const Hero = () => {
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
        <header className={styles.Hero} id="Hero">
            <div className={styles.HeroContent}>
                <div className={styles.HeroContent__text}>
                    <h1 className={styles.h1}>
                        Impulzza tu empresa,<br />
                        Somo tu<br />

                        <span className={styles.animatedText}>
                            {
                                // 1. Dividimos el texto actual en líneas para manejar los \n
                                currentText.split('\n').map((line, lineIndex) => (
                                    <React.Fragment key={lineIndex}>
                                        {
                                            // 2. Dividimos cada línea en palabras
                                            line.split(' ').map((word, wordIndex) => {
                                                // 3. Contamos los caracteres para calcular el delay correcto
                                                let charCount = 0;
                                                const previousWords = line.split(' ').slice(0, wordIndex);
                                                previousWords.forEach(w => charCount += w.length + 1); // +1 por el espacio

                                                return (
                                                    <span key={wordIndex} className={styles.wordWrapper}>
                                                        {
                                                            // 4. Animamos cada letra de la palabra
                                                            word.split('').map((char, charIndex) => (
                                                                <span
                                                                    key={charIndex}
                                                                    className={styles.letter}
                                                                    style={{
                                                                        // 5. El delay ahora es global, no por palabra
                                                                        animationDelay: `${(charCount + charIndex) * 0.1}s`
                                                                    }}
                                                                >
                                                                    {char}
                                                                </span>
                                                            ))
                                                        }
                                                    </span>
                                                );
                                            })
                                        }
                                        {/* 6. Añadimos el <br /> si no es la última línea */}
                                        {lineIndex < currentText.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))
                            }
                        </span>
                    </h1>
                    <div className={styles.HeroContent__buttons}>
                        <Button
                            text="Explora nuestros servicios"
                            backgroundColor="var(--maiz)"
                            hoverColor="var(--esmerald)"
                            fontSize="var(--font-medium)"
                            onClick={() => scrollToSection("ImpulzzeEmpresas")}
                        />
                        <Button
                            text="Contáctanos"
                            backgroundColor="var(--salmon)"
                            hoverColor="var(--esmerald)"
                            fontSize="var(--font-medium)"
                            onClick={() => scrollToSection("RegistrarEmpresa")}
                        />
                    </div>
                </div>

                <div className={styles.HeroContent__Logotipo}>
                    <div className={styles.logotipo}>
                        <Logotipo1 color="var(--esmerald)" width="9rem" height="auto" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
