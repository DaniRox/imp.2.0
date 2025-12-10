import styles from "@/components/Button.module.scss";

const Button = ({ text = "Click me", backgroundColor = "#007BFF", hoverColor = "#0056b3", fontSize, onClick, href }) => {
    const buttonStyle = {
        "--background-color": backgroundColor,
        "--hover-color": hoverColor,
        "--font-size": fontSize
    };

    return href ? (
        <a
            href={href}
            className={styles.button}
            style={buttonStyle}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    ) : (
        <button
            className={styles.button}
            style={buttonStyle}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
