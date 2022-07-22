import './App.css';
import FormInput from './components/FormInput';
import './components/navbar'
import NavBar from './components/navbar';

function App() {
  const [profileValues, setProfileValues] = useState({
    username:"",
    password:"",
  });

  const inputs = [{
    id: 1,
    name:'username',
    type:'text',
    placeholder:'Username',
    label:'Username'
  },
  {
    id: 2,
    name:'password',
    type:'text',
    placeholder:'Password',
    label:'Password'
  }]

  const handleSubmit = (e)=> {
    e.preventDefault();
  };

  const onChange = (e)=>{
    setProfileValues({...profileValues, [e.target.name]: e.target.value });
  }
  return (<div className='App'>
    <NavBar />

    <form className='loginCard' onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput 
        key={input.id} 
        {...input} 
        value={profileValues[input.name]}
        onChange={onChange}/>

      ))}

    <button>Submit</button>
    </form>
  </div>
    
  );
}

export default App;
