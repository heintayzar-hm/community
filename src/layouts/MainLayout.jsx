import { useSelector } from 'react-redux';
import NavBar from '../components/Navbar/NavBar';
import SideBar from '../components/Sidebar/SideBar';
import { ThemeProvider } from '@material-tailwind/react';
import ScrollToTop from "react-scroll-to-top";
import {ArrowLongUpIcon} from '@heroicons/react/24/outline'
const MainLayout = ({ children }) => {
  const darkMode = useSelector((state) => state.user.darkMode);
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
      <div
        className={`flex flex-col md:flex-row space-y-4 md:space-y-0 h-full ${
          darkMode ? 'dark bg-dark-800 text-white' : ''
        }`}
      >
        <div className="w-[255px] hidden md:block">
          <SideBar />
        </div>
        <div className="flex flex-col w-full h-full flex-1">
          <NavBar />
          <main className="md:px-12 px-3 py-4 dark:bg-dark-900 min-h-screen">{children}</main>
        </div>
      </div>
      <ScrollToTop smooth
        className=' bg-primary rounded-full cursor-pointer'
        component={<ArrowLongUpIcon className='w-6 h-6 text-white mx-auto' />}
      />

    </ThemeProvider>
  );
};

export default MainLayout;
