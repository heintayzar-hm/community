import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  TabsHeader,
  Tab,
  Tabs
} from '@material-tailwind/react';
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

import { createElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

const data = [
  {
    label: ROUTES.HOME.name,
    value: ROUTES.HOME.path,
    icon: Square3Stack3DIcon,
  },
  {
    label: ROUTES.PROFILE.name,
    value: ROUTES.PROFILE.path,
    icon: UserCircleIcon,
  },
  {
    label: ROUTES.SETTING.name,
    value: ROUTES.SETTING.path,
    icon: Cog6ToothIcon,
  }
];

const NavElements = () => {
  return (
    <TabsHeader>
    {data.map(({ label, value, icon }) => (
      <Link to={value} key={value}>
        <Tab key={value} value={value}>
          <div className="flex items-center gap-2">
            {createElement(icon, { className: 'w-5 h-5' })}
            {label}
          </div>
        </Tab>
      </Link>
    ))}
  </TabsHeader>
  )
}

const NavBar = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth <= 560 && setOpenNav(false));
  }, []);

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <Tabs value="dashboard">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex items-center gap-4">
            <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium hidden sm:block">
              Material Tailwind
            </Typography>
            <NavElements />
           </div>

            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">
              </div>
              <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                <span>Register</span>
              </Button>
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
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Register</span>
            </Button>
          </Collapse>
        </Tabs>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
        {children}</div>
    </>
  );
};

export default NavBar;
