import styles from "@/components/CardEmpresas.module.scss";

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

const CardEmpresas2 = ({ Icon, title, text }) => {
    return (
        <div className={styles.CardEmpresas2}>
            <div className={styles.CardEmpresas__icon2}>
                <Icon size={20} color="var(--dark)" />
            </div>
            <h3 className={styles.CardEmpresas__title2}>{title}</h3>
            <p className={styles.CardEmpresas__text2}>{text}</p>
        </div>
    );
};

export { CardEmpresas, CardEmpresas2 };
