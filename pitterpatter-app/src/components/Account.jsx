import React from 'react';



const Account = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>

            <button className='Btn'>Logout</button>
        </div>
    )
}



export default Account;