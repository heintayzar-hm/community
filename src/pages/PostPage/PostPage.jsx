import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../redux/slices/PostSlice/PostThunk';
import Post from '../../components/Post/Post';

const PostPage = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.postState.post);
  const token = useSelector((state) => state.user.data.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost({ postId: id, token }));
  }, []);
  return <>{post && <Post post={post} />}</>;
};

export default PostPage;
