import { useSelector } from 'react-redux';
import { commentPost, getPostComments } from '../../redux/api/post';
import relativeTimePlugin from 'dayjs/plugin/relativeTime';
import defaultProfile from '../../assets/default/defaultProfile.jpg';

import { useEffect, useState } from 'react';
import PostCommentBox from './PostCommentBox';
import {
  HandThumbUpIcon,
  } from '@heroicons/react/24/solid';
import dayjs from 'dayjs';
import { API } from '../../constants';
dayjs.extend(relativeTimePlugin);

const Comments = ({ id, showCommentBox, handleCommentBox }) => {
  // func
  // needs token
  const token = useSelector((state) => state.user.data.token);
  const [comments, setComments] = useState([]);
  console.log(comments);
  // for profile image url
  const getComments = async () => {
    await getPostComments(id, token).then((res) => {
      if (res.success) {
        setComments(res.data);
      }
    });
  };
  const postComment = async (comment) => {
    await commentPost(
      {
        text: comment,
        content_id: id
      },
      token
    ).then((res) => {
      if (res.success) {
        getComments();
      }
      if (res == 'Unauthorized') {
        alert('Please login to comment this post');
      }
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div id="comment" className="w-full">
      <PostCommentBox
        showCommentBox={showCommentBox}
        handleCommentBox={handleCommentBox}
        postComment={postComment}
      />
      <div className="w-full flex flex-col space-y-5">
        {comments.map((comment, id) => {
          const {
            profile_image,
            author_name,
            published_at,
            content,
            total_likes,
            replys,
            is_liked
          } = comment;
          let isLike = is_liked;
          let totalLikes = total_likes;
          let totalComments = replys.length;
          let profileUrl = profile_image
            ? profile_image.startsWith('/')
              ? API.IMAGE_URL.slice(0, -1) + profile_image
              : API.IMAGE_URL + profile_image
            : defaultProfile;

          return (
            <div
              className="px-5 py-4 bg-white dark:bg-dark-800 rounded-lg max-w-lg shadow-2xl w-full"
              key={id}
            >
              <div className="flex mb-4">
                <img className="w-12 h-12 rounded-full" src={profileUrl} />
                <div className="ml-2 mt-0.5">
                  <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                    {content.title || author_name}
                  </span>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                    {dayjs(published_at).fromNow()}
                  </span>
                </div>
              </div>
              <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal mt-5">
                {content?.text}
              </p>

              <div className="flex justify-between items-center mt-5">
                <div className="flex ">
                  <HandThumbUpIcon
                    className={`h-5 w-5 ${isLike ? 'text-primary' : 'text-gray-500'}`}
                  />
                  <span
                    className={`ml-1   font-light ${isLike ? 'text-blue-500' : 'text-gray-500'}`}
                  >
                    {totalLikes}
                  </span>
                </div>
                <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                  <span>{totalComments} comments</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
