const Profile = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {user.username}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
