import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { changeModeFunc } from '../../redux/slices/userSlice/userSlice';

const ModeChanger = () => {
  const darkMode = useSelector((state) => state.user.darkMode);
  const dispatch = useDispatch();
  const changeMode = () => {
    dispatch(changeModeFunc());
  };
  return darkMode ? (
    <SunIcon className="h-5 w-5 cursor-pointer" onClick={changeMode} />
  ) : (
    <MoonIcon className="h-5 w-5 cursor-pointer" onClick={changeMode} />
  );
};

export default ModeChanger;
