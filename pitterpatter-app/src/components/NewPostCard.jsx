import React from "react";
import {useState } from 'react';
import './NewPostCard.css';
import { ref, child, push, update, getDatabase } from "firebase/database";

const NewPostCard =(props) => {
    const [post, setPost] = useState({
        user:"",
        content: ""
    });

    

    const createNewPost = (uid, user, content) => {
        const db = getDatabase();

        const postData = {
            user: post.user,
            uid: uid,
            content: post.content
        };
        const newPostKey = push(child(ref(db), 'posts')).key;

        const updates = {};
        updates['/posts/' + newPostKey] = postData;
        updates['/user-posts/' + uid + '/' + newPostKey] = postData;
        setPost(postData);

        return update(ref(db), updates);

    }

    const handlePost = () => {
        try {
            createNewPost();
            
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className="newPost">
            <h2>Let's get 'Atter</h2>
            <input value=''  placeholder="Say something..."/>

            <button onClick={handlePost} className='PostBtn'>Send</button>
        </div>
    )
}

export default NewPostCard;