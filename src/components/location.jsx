import { Link } from 'react-router-dom';

const Location = ({ title, id }) => {
    return (
        <Link to={`/accommodation/${id}`} className="location">
            <h2 className="location__title">{title}</h2>
        </Link>
    );
};

export default Location;
