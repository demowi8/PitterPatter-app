import React from 'react';
import { UserAuth } from '../context/AuthContext';
import './Account.css';

const Account = (props) => {
    const {user, logout} = UserAuth();

    return (
        <div>
            <h1>Hi {user.email}</h1>

            <button className='LogBtn'>Logout</button>
        </div>
    )
}



export default Account;