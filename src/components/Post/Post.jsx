import { API } from '../../constants';
import dayjs from 'dayjs';
import relativeTimePlugin from 'dayjs/plugin/relativeTime';
import {
  HandThumbUpIcon,
  BookmarkIcon,
} from '@heroicons/react/24/solid';
import defaultProfile from '../../assets/default/defaultProfile.jpg';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { likePost } from '../../redux/api/post';
import Comments from '../Comments/Comments';
import ReactionGroup from '../ReactionGroup/ReactionGroup';
dayjs.extend(relativeTimePlugin);

const Post = ({ post }) => {
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
  } = post;

  const [isLike, setIsLike] = useState(is_liked);
  const [totalLikes, setTotalLikes] = useState(total_likes);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [showCommentBox, setShowCommentBox] = useState(isLoggedIn);
  // for profile image url
  let profileUrl = profile_image
    ? profile_image.startsWith('/')
      ? API.IMAGE_URL.slice(0, -1) + profile_image
      : API.IMAGE_URL + profile_image
    : defaultProfile;
  // for main image url
  const images = content?.images ?? [];
  const youtubeUrls = content?.youtubeUrl ?? [];
  const videos = content?.videos ?? [];
  const combinedMedia = images.concat(youtubeUrls, videos); // for gallery
  const imageBaseUrl =
    images.length > 0 ?? images[0].image.startsWith('/')
      ? API.IMAGE_URL.slice(0, -1)
      : API.IMAGE_URL;

  // func
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
  const handleCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  };

  return (
    <>
      <div className="flex flex-col mx-auto md:w-2/3 justify-center space-y-5 p-2 w-full items-center bg-white dark:bg-dark-800 dark:text-white border border-gray-200 rounded-lg shadow">
        <div className="col-span-2 h-full ">
          <div className="flex my-4 ">
            <img className="w-12 h-12 rounded-full" src={profileUrl} />
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
          <div>
            {content?.summary}
            <div dangerouslySetInnerHTML={{ __html: content?.details[0] }} />
          </div>
        </div>

        {images.length > 0 && (
          <div className="w-full md:h-auto md:rounded-none md:rounded-l-lg col-span-1">
            <img
              className="object-cover w-full max-h-96 rounded-t-lg"
              src={imageBaseUrl + images[0].image}
              alt={images[0].caption}
            />
          </div>
        )}
        <div className="flex justify-between items-center mt-5 w-full">
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
          handleComment={handleCommentBox}
          isLike={isLike}
          allowComment={allow_comment}
        />
        <Comments id={id} showCommentBox={showCommentBox} handleCommentBox={handleCommentBox} />
      </div>
    </>
  );
};

export default Post;
