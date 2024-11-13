import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, loadUserFromLocalStorage } from '../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import side from './assets/Side Image.png';
import google from './assets/Icon-Google.png';

function Signup() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user) || {};
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [emailorPhone, setEmailorPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordlogin, setPasswordlogin] = useState('');
  const [emailorPhonelogin, setEmailorPhonelogin] = useState('');
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin') === 'true');

  useEffect(() => {
    dispatch(loadUserFromLocalStorage());
  }, [dispatch]);

  const resetForm = () => {
    setName('');
    setLastName('');
    setEmailorPhone('');
    setPassword('');
    setPasswordlogin('');
    setEmailorPhonelogin('');
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    localStorage.setItem('isLogin', !isLogin);
    resetForm();
  };

  const handleForgetPassword = () => {
    setIsLogin(false);
    localStorage.setItem('isLogin', 'false');
    resetForm();
  };

  const handleSubmit = () => {
    if (!isLogin) {
      const userData = {};

      if (name) userData.name = name;
      if (lastname) userData.lastname = lastname;
      if (emailorPhone) userData.emailorPhone = emailorPhone;
      if (password) userData.password = password;

      if (Object.keys(userData).length > 0) {
        dispatch(setUser(userData));
        localStorage.setItem('user', JSON.stringify(userData));
        alert("Foydalanuvchi ma'lumotlari muvaffaqiyatli saqlandi!");

        navigate('/');
      } else {
        alert("Iltimos, barcha maydonlarni to'ldiring.");
      }
    } else {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.emailorPhone === emailorPhonelogin && storedUser.password === passwordlogin) {
        alert("Login muvaffaqiyatli bajarildi!");
        navigate('/');
      } else {
        alert("Email yoki parol noto‘g‘ri.");
      }
    }
  };

  return (
    <>
      {!isLogin ? (
        <div className='Signup'>
          <img src={side} alt="" />
          <div className="account-card">
            <h1>Create an account</h1>
            <span>Enter your details below</span>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email or Phone number"
              value={emailorPhone}
              onChange={(e) => setEmailorPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btm-card">
              <button className='cr-btn' onClick={handleSubmit}>Create account</button>
              <button className='gl-btn'><img src={google} alt="" />Sign up with Google</button>
              <p>Already have an account? <b onClick={toggleLogin} style={{ cursor: 'pointer' }}>Log in</b></p>
            </div>
          </div>
        </div>
      ) : (
        <div className="Login">
          <img src={side} alt="" />
          <div className="login-card">
            <h1>Log in to Exclusive</h1>
            <span>Enter your details below</span>
            <input
              type="text"
              placeholder="Email or Phone number"
              value={emailorPhonelogin}
              onChange={(e) => setEmailorPhonelogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordlogin}
              onChange={(e) => setPasswordlogin(e.target.value)}
            />
            <div className="pass-card">
              <button onClick={handleSubmit}>Log In</button>
              <button onClick={handleForgetPassword}>Forget Password?</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
