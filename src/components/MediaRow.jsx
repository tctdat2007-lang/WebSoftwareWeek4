import {Link} from 'react-router';

const MediaRow = (props) => {
  const {item} = props;

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
        {new Date(item.created_at).toLocaleString('fi-FI')}
      </td>

      <td className="border border-black p-2">
        {item.filesize}
      </td>

      <td className="border border-black p-2">
        {item.media_type}
      </td>

      <td className="border border-black p-2">
        <Link
          className="no-underline"
          to="/single"
          state={{item}}
        >
          Show
        </Link>
      </td>
    </tr>
  );
};

export default MediaRow;
