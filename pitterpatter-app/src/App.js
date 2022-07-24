import './App.css';
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Account';


function App() {
  //2 function button login and register
  // login button checks if username&password are in database and if they are they show profile card, create tweets, and tweets from user and other users
  // register button creates a new username&password and adds to database then logs profile in



  return (<div className='App'>
    <NavBar />


    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/account' element={<Account />} />
    </Routes>

  </div>
    
  );
}

export default App;
