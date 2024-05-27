import { Link } from 'react-router-dom';

const Accomodation = ({ title, id, src }) => {
    return (
        <Link to={`/kasa/accommodation/${id}`} className="accomodation">
            <div className='accomodation__overlay'></div>
            <h2 className="accomodation__title">{title}</h2>
            <img className='accomodation__cover' src={src} alt="photographie du lieu" />
        </Link>
    );
};

export default Accomodation;
