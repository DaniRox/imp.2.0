import { useRef, useEffect, useState } from 'react';
import styles from "./CasosDeExitoFreelancers.module.scss";
import CardComentario from "../../components/CardComentario";
import ArrowLeft from "../../components/ArrowLeft";
import ArrowRight from "../../components/ArrowRight";

const CasosDeExitoFreelancers = () => {
    const contentRef = useRef(null);
    const scrollSpeed = 1; // Velocidad del auto-scroll

    // Estados para controlar el comportamiento
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Datos de las tarjetas
    const cards = [
        {
            img: "/images/freelancer1.jpg",
            text: "Quiero agradecer a Impulzze por su excelente apoyo en el perfilamiento y optimización de mi CV. Su asesoría me ayudó a mejorar mi presencia profesional y a resaltar mis competencias como Project Manager, alineandolas mejor con las demandas del mercado. Recomiendo su servicio a quienes buscan potenciar su carrera y destacarse en su industria. ¡Gracias por el gran trabajo!" ,
            name: "Marielisa - Jefa de Proyectos"
        },

        {
            img: "/images/freelancer2.jpg",
            text: "Impulzze me ayudó a darle forma a mi perfil profesional y a gnar seguridad de mis habilidades blandas para comenzar con toda la fuerza con mi primera búqueda laboral especializada en UX, en unas semanas logré convertirme en CUstomer Success en una Startup como siempre fue mi objetivo.",
            name: "Marielith - Cusstomer Success"
        },

        {
            img: "/images/freelancer3.jpg",
            text: "Agradezco a Impulzze por su acompañamiento desde el inicio de mi proceso de bíusqueda laboral hasta la concreción de una oportunidad que marcó un antes y un después en mi carrera. Personas que te acompañan, guían y dan todos los tips que me sirvieron para mi crecimiento profesional.",
            name: "Douglas - Senior Sales Development"
        },
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
        <section className={styles.CasosDeExitoFreelancers} id="CasosDeExitoFreelancers">
            <h1 className={styles.CasosDeExitoFreelancers__title}>
                Casos de Exitos:<br />
                Nuestros clientes lo respaldan.
            </h1>

            <button className={styles.arrowLeft} onClick={handleArrowRightClick} aria-label="Desplazarse hacia la izquierda">
                <ArrowLeft size={80} color="var(--maiz)" />
            </button>

            <button className={styles.arrowRight} onClick={handleArrowLeftClick} aria-label="Desplazarse hacia la derecha">
                <ArrowRight size={80} color="var(--maiz)" />
            </button>

            <div
                className={styles.CasosDeExitoFreelancersContent}
                ref={contentRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {[...cards, ...cards].map((card, index) => (
                    <CardComentario
                        key={index}
                        img={card.img}
                        text={card.text}
                        name={card.name}
                    />
                ))}
            </div>

            <h1 className={styles.CasosDeExitoFreelancers__title2}>
                Conecta con nosotros y crea éxito.
            </h1>
        </section>
    );
};

export default CasosDeExitoFreelancers;
