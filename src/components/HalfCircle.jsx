const HalfCircle = ({ width = 86, height = 170, color = '#000', className }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 86 170"
        width={width}
        height={height}
        className={className}
        >
        <path
            d="M86 0C38.5 0 0 38.1 0 85s38.5 85 86 85V0Z"
            fill={color}
        />
        </svg>
    );
};

export default HalfCircle;
