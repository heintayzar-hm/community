import {
  Navbar,
  Collapse,
  IconButton,
  TabsHeader,
  Tab,
  Tabs
} from '@material-tailwind/react';
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

import { createElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import ModeChanger from '../ModeChanger/ModeChanger';
import SignIn from '../../pages/Auth/SignIn/SignIn';

const data = [
  {
    label: ROUTES.HOME.name,
    value: ROUTES.HOME.path,
    icon: Square3Stack3DIcon
  },
  {
    label: ROUTES.COMMUNITY_FEED.name,
    value: ROUTES.COMMUNITY_FEED.path,
    icon: UserCircleIcon
  },
  {
    label: ROUTES.MUTUAL_FRIENDS.name,
    value: ROUTES.MUTUAL_FRIENDS.path,
    icon: Cog6ToothIcon
  }
];

const NavElements = () => {
  return (
    <TabsHeader className="dark:bg-dark-900 dark:text-white">
      {data.map(({ label, value, icon }) => (
        <Link to={value} key={value}>
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2 sm:!text-sm !text-xs dark:text-primary">
              {createElement(icon, { className: 'w-5 h-5', title: label })}
              <span className="md:hidden lg:block sm:block">{label}</span>
            </div>
          </Tab>
        </Link>
      ))}
    </TabsHeader>
  );
};

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth <= 560 && setOpenNav(false));
  }, []);

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 dark:bg-dark-800">
        <Tabs value="dashboard">
          <div className="flex items-center justify-between text-blue-gray-900 dark:text-white ">
            <div className="flex items-center gap-4">
              <NavElements />
            </div>

            {/* Mode changer and user profile or register */}
            <div className="sm:flex items-center gap-4 hidden">
              <ModeChanger />

              <div className="mr-4">
                <SignIn />
              </div>

              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>

          <Collapse open={openNav}>
            <SignIn />
          </Collapse>
        </Tabs>
      </Navbar>
    </>
  );
};

export default NavBar;
