import { Button, ThemeProvider } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const SingularLayout = ({ children }) => {
  const darkMode = useSelector((state) => state.user.darkMode);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  let theme = {
    // theme
  };
  if (darkMode) {
    theme = {
      colors: {
        primary: 'green', // dark color
        secondary: '#1E1E1E' // light color
      }
    };
  }

  return (
    <ThemeProvider value={theme}>
      <div className={`${darkMode ? 'dark bg-dark-900 text-white' : ''}`}>
        <Button
          onClick={goBack}
          color="blue"
          variant="outlined"
          className="mt-5 mb-3 mx-3 !rounded-full dark:bg-white"
        >
          <ArrowLongLeftIcon className="h-5 w-5" />
        </Button>
        <div className="flex flex-col w-full h-full flex-1">
          <main className="md:px-12 px-3 py-4 dark:bg-dark-900 min-h-screen">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SingularLayout;
