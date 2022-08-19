import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './register';
import Portal from './Portal';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Askquestion from './Askquestion';
import Answers from './Answers';
import ForgetPassword from './ForgetPassword';
import Verification from './Verification';
import { UserProvider } from './UserContext';
import ChangePassword from './ChangePassword';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/ForgetPassword' element={<ForgetPassword />} />
          <Route path='/Verification' element={<Verification />} />
          <Route path='/ChangePassword' element={<ChangePassword />} />
          <Route path='/Portal' element={<Portal />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Dashboard/Answers/:id" element={<Answers />} />
            <Route path="Dashboard/Askquestion" element={<Askquestion />} />
            <Route path="Dashboard/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </UserProvider>

    </BrowserRouter>
  );
}

export default App;
