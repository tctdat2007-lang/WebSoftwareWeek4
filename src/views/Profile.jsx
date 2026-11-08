import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks.js';

const Profile = () => {
  const [user, setUser] = useState(null);

  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        const token =
          localStorage.getItem('token');

        const userData =
          await getUserByToken(token);

        console.log(userData);

        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <>
      <h1>Profile</h1>

      {user && (
        <>
          <p>
            Username: {user.username}
          </p>

          <p>
            Email: {user.email}
          </p>
        </>
      )}
    </>
  );
};

export default Profile;
