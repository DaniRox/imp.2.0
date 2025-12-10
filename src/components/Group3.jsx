const Group3 = ({
    height = 100,
    width = 150,
    className = "",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 453 302"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M302 151V0H151C67.6049 0 0 67.605 0 151H302Z" fill="#EBDD3F"/>
            <path d="M0 151V302H151C234.395 302 302 234.395 302 151H0Z" fill="#1EDA98"/>
            <path d="M453 0L302 0V151C302 234.395 369.605 302 453 302V0Z" fill="#5739A8"/>
        </svg>
    );
};

export default Group3;
