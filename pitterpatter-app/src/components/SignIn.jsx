import FormInput from './FormInput';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';



const SignIn =() => {
    const [profileValues, setProfileValues] = useState({
        username:"",
        password:"",
      });
    
      const inputs = [{
        id: 1,
        name:'username',
        type:'text',
        placeholder:'Username',
        errorMessage:'Username did not match',
        label:'Username',
        required: true
      },
      {
        id: 2,
        name:'password',
        type:'text',
        placeholder:'Password',
        errorMessage:'Password did not match',
        label:'Password',
        required: true
      }]
    
      const handleSubmit = (e)=> {
        e.preventDefault();
      };
    
      const onChange = (e)=>{
        setProfileValues({...profileValues, [e.target.name]: e.target.value });
      }
    return (
    <div>
        <form className='loginCard' onSubmit={handleSubmit}>
        {inputs.map((input) => (
            <FormInput 
            key={input.id} 
            {...input} 
            value={profileValues[input.name]}
            onChange={onChange}/>

        ))}
            <button className='Btn'>Login</button>
            <p>Don't have an account yet? <Link to='/signup'>Sign up.</Link></p>
        </form>
    </div>
    )
}


export default SignIn;
