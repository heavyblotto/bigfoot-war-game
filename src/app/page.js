'use client';

import { useState } from 'react';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';

const Home = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Bigfoot War Lobby</h1>
      {!user ? (
        <>
          <Register setUser={setUser} />
          <Login setUser={setUser} />
        </>
      ) : (
        <Profile user={user} setUser={setUser} />
      )}
    </div>
  );
};

export default Home;
