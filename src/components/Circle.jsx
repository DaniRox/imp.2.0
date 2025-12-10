const Circle = ({ size = 169, color = '#000' }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 169 169"
        width={size}
        height={size}
        >
        <path
            d="M0 84.5A84.5 84.5 0 1 1 169 84.5A84.5 84.5 0 0 1 0 84.5Z"
            fill={color}
        />
        </svg>
    );
};

export default Circle;
