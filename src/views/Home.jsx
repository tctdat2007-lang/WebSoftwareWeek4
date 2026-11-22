import MediaRow from '../components/MediaRow.jsx';
import {useMedia} from '../hooks/apiHooks.js';

const Home = () => {
  const {
    mediaArray,
    deleteMedia,
    modifyMedia,
  } = useMedia();

  return (
    <>
      <h1 className="text-3xl font-bold">
        My Media
      </h1>

      <table className="w-full border-collapse">
        <thead>
        <tr>
          <th className="border border-black p-2 text-left">Thumbnail</th>
          <th className="border border-black p-2 text-left">Title</th>
          <th className="border border-black p-2 text-left">Description</th>
          <th className="border border-black p-2 text-left">Owner</th>
          <th className="border border-black p-2 text-left">Created</th>
          <th className="border border-black p-2 text-left">Size</th>
          <th className="border border-black p-2 text-left">Type</th>
          <th className="border border-black p-2 text-left">Action</th>
        </tr>
        </thead>

        <tbody>
        {mediaArray.map((item) => (
          <MediaRow
            key={item.media_id}
            item={item}
            deleteMedia={deleteMedia}
            modifyMedia={modifyMedia}
          />
        ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
