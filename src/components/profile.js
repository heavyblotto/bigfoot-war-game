import { useUserStore } from '@/store/userStore';

const Profile = () => {
  const { user, logout } = useUserStore();

  if (!user) {
    return <div>Please log in to see your profile.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
