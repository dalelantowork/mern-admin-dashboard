import React, { useState, useEffect }  from 'react'
import Navbar from '../Navbar/Navbar';
import decode from 'jwt-decode';
import { useDispatch} from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';

const Home = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        else{
            history.push('/auth');
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Home
