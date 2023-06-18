import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { getNewFeed } from '../../redux/slices/PostSlice/PostThunk';
import { useEffect, useState } from 'react';
import { IconButton, Spinner, Textarea, Button } from '@material-tailwind/react';
import { LinkIcon } from '@heroicons/react/24/outline';

import InfiniteScroll from 'react-infinite-scroll-component';

const HomePage = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const newFeed = useSelector((state) => state.postState.newFeed);
  const token = useSelector((state) => state.user.data.token);

  const posts = newFeed.posts;
  const fetchMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };
  // for handling infinite
  useEffect(() => {
    dispatch(getNewFeed({ page, token })).then((res) => {
      if (res.type === getNewFeed.rejected.type) {
        alert('Error');
      } else if (!res.payload.has_next_page) {
        console.log('Page full');
      }
    });
  }, [page]);
  if (posts.length === 0)
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner className="h-12 w-12" color="pink" />
      </div>
    );
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="w-full">
          <div className="mb-5">
            <Textarea
              size="md"
              className="dark:!text-white !h-[100px]"
              variant="static"
              placeholder="What's your thought?"
              rows={8}
              name="comment"
            />
            <div className="w-full flex justify-between py-1.5">
              <IconButton variant="text" color="blue-gray" size="sm">
                <LinkIcon strokeWidth={2} className="w-4 h-4" />
              </IconButton>
              <div className="flex gap-2">
                <Button size="sm" color="red" variant="text" className="rounded-md">
                  Cancel
                </Button>
                <Button size="sm" className="rounded-md">
                  Post
                </Button>
              </div>
            </div>
          </div>
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchMorePosts}
            hasMore={newFeed.hasNextPage}
            loader={
              <div className="flex w-full items-center justify-center">
                <Spinner className="h-12 w-12" color="pink" />
              </div>
            }
          >
            {posts.map((item, index) => {
              return <Card key={index} data={item} />;
            })}
          </InfiniteScroll>
        </div>
        <div className="lg:block hidden">Ads and others</div>
      </div>
    </div>
  );
};

export default HomePage;
