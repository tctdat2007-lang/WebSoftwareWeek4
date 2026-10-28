import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state.item;

  const navigate = useNavigate();

  return (
    <>
      <h1>{item.title}</h1>

      <p>{item.description}</p>

      {item.media_type === 'image/jpeg' ? (
        <img
          src={item.filename}
          alt={item.title}
        />
      ) : (
        <video
          src={item.filename}
          controls
        ></video>
      )}

      <br />

      <button onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
};

export default Single;
