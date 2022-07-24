import './App.css';
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoutes';


function App() {
  //3 function button login and register and logout
  // login button checks if username&password are in database and if they are they show profile card, create tweets, and tweets from user and other users
  // register button creates a new username&password and adds to database then logs profile in
// logout returns to home page signin/signup


  return (<div className='App'>
    <NavBar />


    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>

  </div>
    
  );
}

export default App;
