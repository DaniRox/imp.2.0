const Shape = ({
    width = 198,
    height = 100,
    fill = "black",
    className = "",
    rotation = 0
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 198 100"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: 'center'
            }}
        >
            <path
                d="M0 99.723C0 44.647 44.324 0 99 0H198v99.723H0Z"
                fill={fill}
            />
        </svg>
    );
};

export default Shape;
