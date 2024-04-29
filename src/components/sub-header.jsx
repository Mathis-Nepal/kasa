const SubHeader = ({path, title}) => {
    return (
        <div className="sub-header">
            <img src={path} alt="" />
            <div className="overlay">
                {title ? <h1>{title}</h1> : null}
            </div>
        </div>
    );
};
export default SubHeader;
