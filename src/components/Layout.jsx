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
        <ul className="flex gap-5 list-none p-0">
          <li>
            <Link
              className="no-underline"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="no-underline"
              to="/upload"
            >
              Upload
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link
                  className="no-underline"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  className="no-underline"
                  to="/logout"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                className="no-underline"
                to="/login"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
