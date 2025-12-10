
import styles from "@/components/CardComentario.module.scss";

const CardComentario = ({ img, title, text }) => {
    return (
        <div className={styles.CardComentario}>
            <div className={styles.CardComentario__img}>
                <img
                    src={img}
                    alt={title}
                    className={styles.CardComentario__foto}
                    width={150}
                    height={150}
                />
                <img src={img} alt={title} className={styles.CardComentario__foto} />
            </div>
            <p className={styles.CardComentario__text}>"{text}"</p>
        </div>
    );
};

export default CardComentario;
