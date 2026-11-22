import {Link, useNavigate} from 'react-router';
import {useUserContext} from '../hooks/contextHooks.js';

const MediaRow = ({
                    item,
                    deleteMedia,
                    modifyMedia,
                  }) => {
  const {user} = useUserContext();
  const navigate = useNavigate();

  const isOwner =
    user?.user_id === item.user_id;

  const isAdmin =
    user?.level_name?.toLowerCase() ===
    'admin' ||
    user?.role?.toLowerCase() === 'admin';

  const canModify =
    user && (isOwner || isAdmin);

  const handleDelete = async () => {
    try {
      const token =
        localStorage.getItem('token');

      await deleteMedia(
        item.media_id,
        token,
      );

      navigate(0);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleModify = async () => {
    try {
      const newTitle = window.prompt(
        'New title:',
        item.title,
      );

      if (newTitle === null) {
        return;
      }

      const newDescription = window.prompt(
        'New description:',
        item.description,
      );

      if (newDescription === null) {
        return;
      }

      const inputs = {
        title: newTitle,
        description: newDescription,
      };

      const token =
        localStorage.getItem('token');

      await modifyMedia(
        item.media_id,
        inputs,
        token,
      );

      navigate(0);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <tr>
      <td className="border border-black p-2">
        <img
          className="w-[120px]"
          src={item.thumbnail}
          alt={item.title}
        />
      </td>

      <td className="border border-black p-2">
        {item.title}
      </td>

      <td className="border border-black p-2">
        {item.description}
      </td>

      <td className="border border-black p-2">
        {item.username}
      </td>

      <td className="border border-black p-2">
        {new Date(
          item.created_at,
        ).toLocaleString('fi-FI')}
      </td>

      <td className="border border-black p-2">
        {item.filesize}
      </td>

      <td className="border border-black p-2">
        {item.media_type}
      </td>

      <td className="border border-black p-2">
        <Link
          className="mr-2 inline-block rounded bg-blue-500 px-3 py-1 text-white no-underline"
          to="/single"
          state={{item}}
        >
          Show
        </Link>

        {canModify && (
          <>
            <button
              className="mr-2 cursor-pointer rounded bg-blue-500 px-3 py-1 text-white"
              onClick={handleModify}
            >
              Modify
            </button>

            <button
              className="cursor-pointer rounded bg-blue-500 px-3 py-1 text-white"
              onClick={handleDelete}
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default MediaRow;
