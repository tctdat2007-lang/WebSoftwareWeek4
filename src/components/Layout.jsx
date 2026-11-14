import {useEffect} from 'react';
import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks.js';

const Layout = () => {
  const {
    user,
    handleAutoLogin,
  } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{' '}

        <Link to="/upload">
          Upload
        </Link>{' '}

        {user ? (
          <>
            <Link to="/profile">
              Profile
            </Link>{' '}

            <Link to="/logout">
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
