import {useNavigate} from 'react-router';
import useForm from '../hooks/formHooks.js';
import {useAuthentication} from '../hooks/apiHooks.js';

const LoginForm = () => {
  const {postLogin} = useAuthentication();

  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      const loginResult = await postLogin(inputs);

      console.log(loginResult);

      localStorage.setItem(
        'token',
        loginResult.token,
      );

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const {
    inputs,
    handleInputChange,
    handleSubmit,
  } = useForm(doLogin, initValues);

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">
            Username
          </label>

          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>

        <div>
          <label htmlFor="loginpassword">
            Password
          </label>

          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
