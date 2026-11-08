import {Link, Outlet} from 'react-router';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          Home
        </Link>{' '}

        <Link to="/profile">
          Profile
        </Link>{' '}

        <Link to="/upload">
          Upload
        </Link>{' '}

        <Link to="/login">
          Login
        </Link>{' '}

        <Link to="/logout">
          Logout
        </Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
