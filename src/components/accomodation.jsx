import { Link } from 'react-router-dom';

const Accomodation = ({ title, id }) => {
    return (
        <Link to={`/accommodation/${id}`} className="accomodation">
            <h2 className="accomodation__title">{title}</h2>
        </Link>
    );
};

export default Accomodation;
