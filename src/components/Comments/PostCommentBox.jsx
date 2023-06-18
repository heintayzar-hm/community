import { useState } from 'react';
import { Textarea, Button, IconButton } from '@material-tailwind/react';
import { LinkIcon } from '@heroicons/react/24/outline';

const CommentComponent = ({ showCommentBox, handleCommentBox, postComment }) => {
  const [comment, setComment] = useState('');
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    postComment(comment);
    setComment('');
  };

  return (
    <div className={`relative w-full ${showCommentBox ? 'cancel-animation' : 'show-animation'}`}>
      <Textarea
        size="md"
        className="dark:!text-white !h-[100px]"
        variant="static"
        placeholder="Your Comment"
        rows={8}
        name="comment"
        value={comment}
        onChange={handleChange}
      />
      <div className="w-full flex justify-between py-1.5">
        <IconButton variant="text" color="blue-gray" size="sm">
          <LinkIcon strokeWidth={2} className="w-4 h-4" />
        </IconButton>
        <div className="flex gap-2">
          <Button
            size="sm"
            color="red"
            variant="text"
            className="rounded-md"
            onClick={handleCommentBox}
          >
            Cancel
          </Button>
          <Button size="sm" className="rounded-md" onClick={handlePostComment}>
            Post Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
