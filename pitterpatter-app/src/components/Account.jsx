import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './Account.css';

const Account = (props) => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/')
            console.log('Logged out');
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div>
            <h1>Welcome {user && user.email}!</h1>

            <button onClick={handleLogout} className='LogBtn'>Logout</button>
        </div>
    )
}



export default Account;