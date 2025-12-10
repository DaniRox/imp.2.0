const ArrowLeft = ({ size = 24, color = "#000" , className}) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color}
        className={className}
        >
        <path d="M11.2 8.9l2.7 2.7q.1.1.1.2t.1.2-.1.2l-2.7 2.7q-.1.1-.2.1-.1 0-.2 0-.2 0-.3-.1-.1-.1-.1-.3V9.1q0-.2.1-.3t.3-.1q.1 0 .3.1z" />
        </svg>
    );
};

export default ArrowLeft;
