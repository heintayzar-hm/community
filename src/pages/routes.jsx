/* eslint-disable react-refresh/only-export-components */

import { lazy } from 'react';
import { ROUTES } from '../constants.js';
import Loading from '../components/Loading/Loading';
import MainLayout from '../layouts/MainLayout.jsx';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Profile = lazy(() => import('../pages/ProfilePage/ProfilePage'));
const Settings = lazy(() => import('../pages/SettingPage/SettingPage'));
// lazy load routes
export default [
  {
    path: ROUTES.HOME.path,
    element: (
        <Home />
    ),
    fallback: <Loading />
  },
  {
    path: ROUTES.PROFILE.path,
    element: (
        <Profile />
    ),
    fallback: <Loading />
  },
  {
    path: ROUTES.SETTING.path,
    element: (
        <Settings />
    ),
    fallback: <Loading />
  }
];
