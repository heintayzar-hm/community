import { ButtonGroup, Button } from '@material-tailwind/react';
import {
  HandThumbUpIcon,
  BookmarkIcon,
  ShareIcon,
  ChatBubbleBottomCenterIcon
} from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

const ReactionGroup = ({ handleLike, handleComment, handleShare, isLike, allowComment }) => {
  // for button color
  const darkMode = useSelector((state) => state.user.darkMode);
  const color = darkMode ? 'white' : 'brown';

  return (
    <ButtonGroup fullWidth={true} variant="outlined" color={color} className="mt-3 items-center">
      <Button className="flex justify-center" onClick={handleLike}>
        <div className="flex ">
          <HandThumbUpIcon className={`h-5 w-5 ${isLike ? 'text-primary' : 'text-gray-500'}`} />
        </div>
      </Button>
      {allowComment && (
        <Button className="flex justify-center" onClick={handleComment}>
          <ChatBubbleBottomCenterIcon className="h-5 w-5 text-gray-500 !justify-items-center !justify-center" />
        </Button>
      )}
      <Button className="flex justify-center" onClick={handleShare}>
        <div>
          <ShareIcon className="h-5 w-5 text-gray-500 text-center" />
        </div>
      </Button>
    </ButtonGroup>
  );
};

export default ReactionGroup;
