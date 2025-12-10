import styles from "./ImpulzzeFreelancers.module.scss";
import { CardFreelancers, CardFreelancers2 } from "../../components/CardFreelancers";
import ArrowLeft from "../../components/ArrowLeft";
import ArrowRight from "../../components/ArrowRight";
import Button from "../../components/Button";
import { Oportunidades, Crecimiento, Seguridad  } from "../../components/Icons";


const ImpulzzeFreelancers = () => {
    return (
        <section className={styles.ImpulzzeFreelancers} id="ImpulzzeFreelancers">
            <h1 className={styles.ImpulzzeFreelancers__title}>Camino Impulzze: <br /> Nuestros Servicios</h1>

            <ArrowLeft
                size={80}
                color="var(--esmerald)"
                className={styles.arrowLeft}
            />

            <ArrowRight
                size={80}
                color="var(--esmerald)"
                className={styles.arrowRight}
            />

            <div className={styles.ImpulzzeFreelancersContent}>

                <CardFreelancers
                    Icon={Oportunidades}
                    title="Camino Competitivo 200 USD"
                    text={
                        <>
                            Te ayudamos a construir una base sólida para competir en mercados remotos y globales. <br />
                            Incluye:
                            <ul>
                                <li>CV optimizado y orientado al mercado correcto</li>
                                <li>LinkedIn estratégico para maximizar visibilidad</li>
                                <li>Preparación completa para ATS</li>
                                <li>Motores de búsqueda y tácticas para aplicar mejor</li>
                                <li>Plan de acción de 90 días</li>
                                <li>Guía de portafolio (si aplica)</li>
                            </ul> 
                            <br />
                            <p className={styles.text__highlighted} >
                                Ideal para: Personas que necesitan claridad, orden y herramientas profesionales.
                            </p>
                            <div className={styles.card__btnContent}>
                                <Button
                                    text="Contáctanos"
                                    backgroundColor="var(--esmerald)"
                                    hoverColor="var(--maiz)"
                                    fontSize="var(--font-small)"
                                    
                                />
                            </div>
                        </>
                    }
                />

                <CardFreelancers2
                    Icon={Crecimiento}
                    title="Camino Sniper 400 USD "
                    text={
                        <>
                            Precisión + acompañamiento 1:1 para acelerar tus resultados. <br />
                            <p className={styles.text__highlighted} >
                                Incluye todo lo del Camino  Competitivo*
                            </p>                            
                            <ul>
                                <li>Acompañamiento personalizado semanal</li>
                                <li>Simulacros de entrevista profesionales</li>
                                <li>Redacción asistida para aplicaciones y networking</li>
                                <li>Optimización profunda de tu posicionamiento</li>
                                <li>Estrategia personalizada por mercado objetivo</li>
                                <li>Checklist de seguimiento</li>
                            </ul>
                            <br />
                            <p className={styles.text__highlighted} >
                                Ideal para: Personas que buscan avances rápidos y apoyo experto en cada paso.
                            </p>
                            <div className={styles.card__btnContent}>
                                <Button
                                    text="Contáctanos"
                                    backgroundColor="var(--esmerald)"
                                    hoverColor="var(--maiz)"
                                    fontSize="var(--font-small)"
                                    
                                />
                            </div>
                        </>
                    }
                />

                <CardFreelancers
                    Icon={Seguridad}
                    title="Metodo Bilingue 600 USD"
                    text={
                        <>
                            Tu perfil listo para competir en mercados internacionales y empresas globales. <br />
                            <p className={styles.text__highlighted} >
                                </p>Incluye todo lo de (Competitivo + Sniper) 
                            <ul>
                                <li>Simulacros de entrevista en inglés</li>
                                <li>Entrenamiento de pitch profesional</li>
                                <li>Corrección de fluidez y storytelling</li>
                                <li>Preparación especializada para roles USA, Canadá y Europa</li>
                                <li>Construcción de elevator pitch en inglés</li>
                            </ul>
                            <br />
                            <p className={styles.text__highlighted} >
                                Ideal para: Profesionales que quieren aplicar a oportunidades internacionales de alto nivel.
                            </p>
                            <div className={styles.card__btnContent}>
                                <Button
                                    text="Contáctanos"
                                    backgroundColor="var(--esmerald)"
                                    hoverColor="var(--maiz)"
                                    fontSize="var(--font-small)"
                                    
                                />
                            </div>
                            
                        </>
                    }
                />
            </div>
        </section>
    );
};

export default ImpulzzeFreelancers;
