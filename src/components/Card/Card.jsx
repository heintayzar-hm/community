import dayjs from 'dayjs';
import relativeTimePlugin from 'dayjs/plugin/relativeTime';
import Gallery from '../Gallery/Gallery';
import { API, ROUTES } from '../../constants';
import {
  HandThumbUpIcon,
  BookmarkIcon,
} from '@heroicons/react/24/solid';

import defaultProfile from '../../assets/default/defaultProfile.jpg';
import {  useSelector } from 'react-redux';
import { likePost } from '../../redux/api/post';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactionGroup from '../ReactionGroup/ReactionGroup';
dayjs.extend(relativeTimePlugin);

const Card = ({ data }) => {
  const {
    id,
    content,
    allow_comment,
    total_likes,
    total_shares,
    total_comments,
    published_at,
    author_name,
    profile_image,
    is_liked,
    is_saved
  } = data;
  const [isLike, setIsLike] = useState(is_liked);
  const [totalLikes, setTotalLikes] = useState(total_likes);
  // for profile image url
  let imageUrl = profile_image
    ? profile_image.startsWith('/')
      ? API.IMAGE_URL.slice(0, -1) + profile_image
      : API.IMAGE_URL + profile_image
    : defaultProfile;

  // for navigation
  const navigate = useNavigate();
  // media to combine
  const images = content?.images ?? [];
  const youtubeUrls = content?.youtubeUrl ?? [];
  const videos = content?.videos ?? [];
  const combinedMedia = images.concat(youtubeUrls, videos); // for gallery

  // functions to handle like, share, comment
  // needs token
  const token = useSelector((state) => state.user.data.token);
  const handleLike = () => {
    likePost(
      {
        post_id: id,
        reaction_type: !isLike
      },
      token
    ).then((res) => {
      if (res.success) {
        setIsLike(!isLike);
        setTotalLikes(totalLikes + (isLike ? -1 : 1));
      }
      if (res == 'Unauthorized') {
        alert('Please login to like this post');
      }
    });
  };
  return (
    <div className=" pb-8 flex items-center w-full">
      <div className="px-5 py-4 bg-white dark:bg-dark-800 rounded-lg max-w-lg shadow-2xl w-full">
        <div className="flex mb-4">
          <img className="w-12 h-12 rounded-full" src={imageUrl} />
          <div className="ml-2 mt-0.5">
            <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
              {content.title || author_name}
            </span>
            <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
              {dayjs(published_at).fromNow()}
            </span>
          </div>
          <BookmarkIcon
            className={`h-5 w-5 ml-auto ${is_saved ? 'text-primary' : 'text-gray-500'}`}
          />
        </div>
        <Gallery gallery={combinedMedia} />
        <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal mt-5">
          <Link to={`${ROUTES.POSTS.path}/${id}`}>{content?.summary}</Link>
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex ">
            <HandThumbUpIcon className={`h-5 w-5 ${isLike ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`ml-1   font-light ${isLike ? 'text-blue-500' : 'text-gray-500'}`}>
              {totalLikes}
            </span>
          </div>
          <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
            <span>{total_comments} comments</span>
            <span className="mx-1"> {total_shares} shares</span>
          </div>
        </div>
        <ReactionGroup
          handleLike={handleLike}
          handleComment={() => {
            navigate(`${ROUTES.POSTS.path}/${id}#comment`);
          }}
          isLike={isLike}
          allowComment={allow_comment}
        />
      </div>
    </div>
  );
};

export default Card;
