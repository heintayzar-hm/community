import { Button } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { changeModeFunc } from '../../redux/slices/userSlice/userSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const changeMode = () => {
    dispatch(changeModeFunc());
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Button variant="outlined" color="blue" onClick={changeMode}>
        Change Mode
      </Button>
    </div>
  );
};

export default HomePage;
