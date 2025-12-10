import styles from "@/components/CardEmpresas.module.css";

const CardEmpresas = ({ Icon, title, text }) => {
    return (
        <div className={styles.CardEmpresas}>
            <div className={styles.CardEmpresas__icon}>
                <Icon size={20} color="var(--dark)" />
            </div>
            <h3 className={styles.CardEmpresas__title}>{title}</h3>
            <p className={styles.CardEmpresas__text}>{text}</p>
        </div>
    );
};

export default CardEmpresas;
