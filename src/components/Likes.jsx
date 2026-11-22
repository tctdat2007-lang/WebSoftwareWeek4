import {useEffect, useState} from 'react';
import {useUserContext} from '../hooks/contextHooks.js';
import {useLike} from '../hooks/apiHooks.js';

const Likes = ({item}) => {
  const {user} = useUserContext();

  const {
    postLike,
    deleteLike,
    getLikeCountByMediaId,
    getLikeByUser,
  } = useLike();

  const [likeCount, setLikeCount] =
    useState(0);

  const [userLike, setUserLike] =
    useState(null);

  const getLikes = async () => {
    try {
      const countResult =
        await getLikeCountByMediaId(
          item.media_id,
        );

      // Accept common API response shapes
      const count =
        countResult.count ??
        countResult.like_count ??
        countResult.likes ??
        countResult;

      setLikeCount(Number(count) || 0);

      if (user) {
        const token =
          localStorage.getItem('token');

        const userLikes =
          await getLikeByUser(
            user.user_id,
            token,
          );

        const likesArray = Array.isArray(
          userLikes,
        )
          ? userLikes
          : userLikes.likes || [];

        const foundLike =
          likesArray.find(
            (like) =>
              like.media_id ===
              item.media_id,
          );

        setUserLike(foundLike || null);
      } else {
        setUserLike(null);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getLikes();
  }, [item.media_id, user]);

  const handleLike = async () => {
    if (!user) {
      return;
    }

    try {
      const token =
        localStorage.getItem('token');

      if (userLike) {
        await deleteLike(
          userLike.like_id,
          token,
        );
      } else {
        await postLike(
          item.media_id,
          token,
        );
      }

      await getLikes();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="my-4">
      <button
        className="cursor-pointer rounded bg-red-500 px-3 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
        onClick={handleLike}
        disabled={!user}
      >
        {userLike ? '♥ Liked' : '♡ Like'}
      </button>

      <span className="ml-2">
        {likeCount} likes
      </span>
    </div>
  );
};

export default Likes;
