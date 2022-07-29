import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth, db } from '../context/AuthContext';
import './Account.css';
import NewPostCard from './NewPostCard';

const Account = () => {
    //each user to be able to create a new post on their account 
    //each user must be able to edit and delete post from their account only
    //each user can see posts from all users on their account
    //account is the only way to see posts from users
    
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
            <div>

            <h1>Welcome {user && user.email}!</h1>

            <button onClick={handleLogout} className='LogBtn'>Logout</button>
            </div>

            <div>
                <NewPostCard />
            </div>
        </div>
    )
}



export default Account;