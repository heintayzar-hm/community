import { Card, Typography, List, ListItem, ListItemPrefix, Input } from '@material-tailwind/react';
import { UserCircleIcon, Cog6ToothIcon, Square3Stack3DIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { APP, ROUTES } from '../../constants';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const data = [
  {
    label: ROUTES.HOME.name,
    value: ROUTES.HOME.path,
    icon: Square3Stack3DIcon
  },
  {
    label: ROUTES.PROFILE.name,
    value: ROUTES.PROFILE.path,
    icon: UserCircleIcon
  },
  {
    label: ROUTES.SETTING.name,
    value: ROUTES.SETTING.path,
    icon: Cog6ToothIcon
  }
];
export default () => {
  const [logoPath, setLogoPath] = useState('');

  useEffect(() => {
    import(`../../assets/${APP.LOGO_PATH}.svg`)
      .then((module) => {
        setLogoPath(module.default);
      })
      .catch((error) => {
        // Handle any errors that occur while loading the image
        console.error(error);
      });
  }, []);

  return (
    <Card className="h-screen fixed  dark:bg-dark-800 text-white hidden md:flex overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-100 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4 mx-auto">
        <Typography variant="h5">
          {logoPath && <img src={logoPath} alt="logo" className="h-10 w-10" />}
        </Typography>
      </div>
      <div className="p-2">
        <Input
          icon={<MagnifyingGlassIcon className="h-5 w-5 " />}
          label="Search"
          className="dark:text-white"
        />
      </div>
      <List className="dark:text-white">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link to={item.value} key={index}>
              <ListItem key={index}>
                <ListItemPrefix>
                  <Icon className="h-5 w-5" />
                </ListItemPrefix>
                {item.label}
              </ListItem>
            </Link>
          );
        })}

        <hr className="my-2 border-blue-gray-50" />
        {/* Other Links */}
      </List>
    </Card>
  );
};
