import FormInput from './FormInput';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const SignUp = () => {
    const [profileValues, setProfileValues] = useState({
        email:"",
        password:"",
      });
    const [error, setError] = useState('');
    const { createUser } = UserAuth();
    const inputs = [{
        id: 1,
        name:'email',
        type:'email',
        placeholder:'Email',
        // label:'E-mail',
        required: true
      },
      {
        id: 2,
        name:'password',
        type:'text',
        placeholder:'Password',
        // label:'Password',
        required: true
      }]
    
      const handleSubmit = async (e)=> {
        e.preventDefault();
        setError('');
        try{
            await createUser(profileValues.email, profileValues.password)

        } catch (e) {
            setError(e.message)
            console.log(e.message);
        }
      };
    
      const onChange = (e)=>{
        setProfileValues({...profileValues, [e.target.name]: e.target.value });
      }
    return (
        <div className='loginCard' >
            <div className='title'>
                <h1>Sign Up</h1>
            </div>
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
            <FormInput 
            key={input.id} 
            {...input} 
            value={profileValues[input.name]}
            onChange={onChange}/>
            ))}
            <button className='Btn'>Submit</button>
            <p>Already have an account yet? <Link to='/'>Sign In.</Link></p>
            </form>
        </div>
    )
}




export default SignUp;
