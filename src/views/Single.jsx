import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state.item;

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl font-bold">
        {item.title}
      </h1>

      <p>{item.description}</p>

      <p>
        Owner: {item.username}
      </p>

      {item.media_type === 'image/jpeg' ? (
        <img
          className="max-w-[600px]"
          src={item.filename}
          alt={item.title}
        />
      ) : (
        <video
          className="max-w-[600px]"
          src={item.filename}
          controls
        />
      )}

      <button
        className="mt-2.5 cursor-pointer px-3 py-1.5"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </>
  );
};

export default Single;
