import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './Account.css';
import {useState, useEffect } from 'react'
import {db} from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ProfileCard from './ProfileCard';

const Account = (props) => {
    //each user to be able to create a new post on their account 
    //each user must be able to edit and delete post from their account only
    //each user can see posts from all users on their account
    //account is the only way to see posts from users
    
        const [users, setUsers] = useState([]);
        const usersCollectionRef = collection(db, 'users')
    
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
            useEffect(() => {
                const getUsers = async () => {
                const data = await getDocs(usersCollectionRef);
                setUsers(data.docs.map((doc) => ({...doc.data})))
            }
            getUsers();
        
            }, [])
    return (
        <div>
            <h1>Welcome {user && user.email}!</h1>

            <button onClick={handleLogout} className='LogBtn'>Logout</button>

            <ProfileCard />
        </div>
    )
}



export default Account;