// import logo from './logo.svg';
// import './App.css';
import socketIO from 'socket.io-client';
import SignIn from './routes/SignIn';
import { Routes, Route, Navigate, Link } from "react-router-dom";
import SignUp from './routes/SignUp';
import Dashboard from './routes/Dashboard';
import { useEffect, useState } from 'react';
import WeatherHome from './routes/WeatherHome';
import WeatherComponent from './myComponents/WeatherComponent';

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="App">

      {/* <SignIn /> */}

      {user ? (<>
        <Routes>
          <Route path='/' element={<SignIn user={user} setUser={setUser} />} />
          <Route path='/signin' element={<SignIn user={user} setUser={setUser} />} /> 
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} />} />
          <Route path='/weatherhome' element={<WeatherHome user={user} setUser={setUser}/>} />
          
        </Routes>
      </>) : (<>
        <Routes>
          <Route path='/' element={<SignIn user={user} setUser={setUser} />} />
          <Route path='/signin' element={<SignIn user={user} setUser={setUser} />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/weatherhome' element={<WeatherHome user={user} setUser={setUser}/>} />
          {/* <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} />} /> */}
        </Routes>
      </>)}

    </div>
  );
}

export default App;
