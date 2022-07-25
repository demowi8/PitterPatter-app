import React from "react";
import {useState, useEffect } from 'react'
import {db} from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


const PostCard =() => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users')

    useEffect(() => {
        const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data})))
    }
    getUsers();

    }, [])

    return (
        <div className="profileCard">
            {users.map((user) => {
                return (
                    <>
                    <div className="email">
                        {user}
                    </div>
                    </>
                )
            })}
        </div>
    )
}

export default PostCard;