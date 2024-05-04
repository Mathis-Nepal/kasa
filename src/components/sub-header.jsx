const SubHeader = ({ path, title }) => {
    return (
        <div className="sub-header">
            <img className="sub-header__background-img" src={path} alt="" />
            <div className="sub-header__overlay">
                {title ? (
                    <h1 className="sub-header__overlay__title">{title}</h1>
                ) : null}
            </div>
        </div>
    );
};
export default SubHeader;
