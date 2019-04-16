import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    //const [color, setColor] = useState('ORANGE');


    return (
        <div className="container">
            <div className="links">
                <Link to={`/Usestate`}>Usestate</Link>
                <Link to={`/Bmi`}>Bmi</Link>
                <Link to={'/UseTheFect'}>UseEffect </Link>
                <Link to={'/Enkelreducer'}>EnkelReducer </Link>
                <Link to={'/Advancereducer'}>AdvanceReducer</Link>
                <Link to={'/Paint'}>Paint</Link>
            </div>
        </div>
    )
}
export default Home