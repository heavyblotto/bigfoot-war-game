import { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Here we'll add the login logic
    console.log('Login:', username, password);
    // For now, let's just set a mock user
    setUser({ username });
  };

  const handleTestUserLogin = () => {
    setUser({ username: 'testuser' });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <button type="button" onClick={handleTestUserLogin}>Login as Test User</button>
    </form>
  );
};

export default Login;
