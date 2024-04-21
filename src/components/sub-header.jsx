const SubHeader = ({path, title}) => {
    console.log('ssssss');
    console.log(path);

    console.log(title);
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
