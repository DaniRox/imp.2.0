import styles from "@/components/Rrss.module.css";

const Rrss = () => {
    return (
        <div className={styles.Rrss__content}>


            <button className={styles.Rrss__icon}>
                <a href="https://www.instagram.com/impulzze?igsh=MXBzajhhMmc0OGd3Ng%3D%3D&utm_source=qr" target="_blank">
                    <img src="/images/ig.png" alt="" className={styles.Rrss_imgIcon}/>
                </a>
            </button>

            <button className={styles.Rrss__icon}>
                <a href="https://www.linkedin.com/company/impulzze/about/" target="_blank">
                    <img src="/images/in.png" alt="" className={styles.Rrss_imgIcon}/>
                </a>
            </button>

            <button className={styles.Rrss__icon}>
                <a href="mailto:jose@impulzze.com" target="_blank">
                    <img src="/images/mail.png" alt="" className={styles.Rrss_imgIcon}/>
                </a>
            </button>

        </div>
    );
};

export default Rrss;
