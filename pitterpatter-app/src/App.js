import './App.css';
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  

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
