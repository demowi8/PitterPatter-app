import React from "react";
import {useState } from 'react';
import './NewPostCard.css';
import {db} from 'firebase';
import { set } from "firebase/database";

const NewPostCard =(props) => {
    const [post, setPost] = useState({
        user:"",
        content: ""
    });

    const createNewPost = () => {
        
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
            <textarea value=''  placeholder="Say something..."/>

            <button onClick={handlePost} className='PostBtn'>Send</button>
        </div>
    )
}

export default NewPostCard;