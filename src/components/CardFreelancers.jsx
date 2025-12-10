import styles from "@/components/CardFreelancers.module.scss";

const CardFreelancers = ({ Icon, title, text }) => {
    return (
        <div className={styles.CardFreelancers}>
            <div className={styles.CardFreelancers__icon}>
                <Icon size={20} color="var(--dark)" />
            </div>
            <h3 className={styles.CardFreelancers__title}>{title}</h3>
            <p className={styles.CardFreelancers__text}>{text}</p>
        </div>
    );
};


const CardFreelancers2 = ({ Icon, title, text }) => {
    return (
        <div className={styles.CardFreelancers2}>
            <div className={styles.CardFreelancers__icon}>
                <Icon size={20} color="var(--dark)" />
            </div>
            <h3 className={styles.CardFreelancers__title}>{title}</h3>
            <p className={styles.CardFreelancers__text}>{text}</p>
        </div>
    );
};


export { CardFreelancers, CardFreelancers2 };
