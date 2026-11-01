import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow.jsx';
import {fetchData} from '../utils/fetchData.js';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData(
          import.meta.env.VITE_MEDIA_API + '/media',
        );

        const newArray = await Promise.all(
          json.map(async (item) => {
            const user = await fetchData(
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
            );

            return {
              ...item,
              username: user.username,
            };
          }),
        );

        setMediaArray(newArray);
      } catch (error) {
        console.log(error);
      }
    };

    getMedia();
  }, []);

  return (
    <>
      <h1>My Media</h1>

      <table>
        <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Description</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Size</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
        </thead>

        <tbody>
        {mediaArray.map((item) => (
          <MediaRow
            key={item.media_id}
            item={item}
          />
        ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
