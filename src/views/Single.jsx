import {useLocation} from 'react-router';
import SingleView from '../components/SingleView.jsx';

const Single = () => {
  const {state} = useLocation();

  const item = state.item;

  return (
    <SingleView item={item} />
  );
};

export default Single;
