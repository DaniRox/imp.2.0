import { useRef, useEffect, useState } from 'react';
import styles from "./CasosDeExitoEmpresas.module.scss";
import CardComentario from "../../components/CardComentario";
import ArrowLeft from "../../components/ArrowLeft";
import ArrowRight from "../../components/ArrowRight";

const CasosDeExitoEmpresas = () => {
    const contentRef = useRef(null);
    const scrollSpeed = 1; // Velocidad del auto-scroll

    // Estados para controlar el comportamiento
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Datos de las tarjetas
    const cards = [
        { img: "/images/client1.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: "/images/client2.jpg", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { img: "/images/client1.jpg", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
        { img: "/images/client2.jpg", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
    ];

    // --- LÓGICA PARA EL AUTO-SCROLL Y LA PAUSA (SIN CAMBIOS) ---
    useEffect(() => {
        const container = contentRef.current;
        if (!container) return;

        let animationFrameId;

        const scroll = () => {
            if (isAutoScrolling && !isPaused) {
                container.scrollLeft += scrollSpeed;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isAutoScrolling, isPaused, scrollSpeed]);

    // --- LÓGICA PARA EL SCROLL INFINITO (CORREGIDA Y ÚNICA) ---
    useEffect(() => {
        const container = contentRef.current;
        if (!container) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth } = container;

            // Cuando llegamos a la mitad del contenido duplicado, volvemos al inicio
            if (scrollLeft >= scrollWidth / 2) {
                container.scrollLeft = 0;
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []); // Este efecto solo se monta una vez

    // --- LÓGICA PARA DETECTAR EL TAMAÑO DE PANTALLA (SIN CAMBIOS) ---
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 10px)');

        const handleMediaChange = (e) => {
            setIsAutoScrolling(e.matches);
        };

        handleMediaChange(mediaQuery);
        mediaQuery.addEventListener('change', handleMediaChange);
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);

    // --- MANEJADORES DE FLECHAS (SIMPLIFICADOS) ---
    const handleArrowRightClick = () => {
        if (contentRef.current) {
            contentRef.current.scrollLeft -= 300;
        }
    };

    const handleArrowLeftClick = () => {
        if (contentRef.current) {
            contentRef.current.scrollLeft += 300;
        }
    };


    return (
        <section className={styles.CasosDeExitoEmpresas} id="CasosDeExitoEmpresas">
            <h1 className={styles.CasosDeExitoEmpresas__title}>
                Transforma tu visión con el equipo correcto. <br />
                Conecta con nosotros y crea éxito.
            </h1>

            <button className={styles.arrowLeft} onClick={handleArrowRightClick} aria-label="Desplazarse hacia la izquierda">
                <ArrowLeft size={80} color="var(--maiz)" />
            </button>

            <button className={styles.arrowRight} onClick={handleArrowLeftClick} aria-label="Desplazarse hacia la derecha">
                <ArrowRight size={80} color="var(--maiz)" />
            </button>

            <div
                className={styles.CasosDeExitoEmpresasContent}
                ref={contentRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {[...cards, ...cards].map((card, index) => (
                    <CardComentario
                        key={index}
                        img={card.img}
                        text={card.text}
                    />
                ))}
            </div>

            <h1 className={styles.CasosDeExitoEmpresas__title2}>
                Nuestros clientes lo respaldan.
            </h1>
        </section>
    );
};

export default CasosDeExitoEmpresas;
