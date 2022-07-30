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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
        <Route path='/ResetPassword' element={<Verification />} />
        <Route path='/Portal' element={<Portal />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Dashboard/Answers/:id" element={<Answers />} />
          <Route path="Dashboard/Askquestion" element={<Askquestion />} />
          <Route path="Dashboard/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
