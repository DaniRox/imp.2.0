const Group4 = ({
    height = 90,
    width = 90,
    className = "",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 302 302"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M151 0L0 0V151C0 234.395 67.605 302 151 302L151 0Z" fill="#EBDD3F"/>
            <path d="M151 302H302V151C302 67.6049 234.395 0 151 0L151 302Z" fill="#1EDA98"/>
        </svg>
    );
};

export default Group4;
