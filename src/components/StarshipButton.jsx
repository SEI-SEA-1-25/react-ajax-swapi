import { Link } from 'react-router-dom';

const Starship = (props) => {
    return (
        <div className="ship-card">
            <Link to={{
                pathname: '/starship',
                state: props.starship
            }}>
                {props.starship.name}
            </Link>
        </div>
    );
}

export default Starship;