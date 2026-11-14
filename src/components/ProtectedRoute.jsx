import {Navigate} from 'react-router';
import {useUserContext} from '../hooks/contextHooks.js';

const ProtectedRoute = ({children}) => {
  const {user} = useUserContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
