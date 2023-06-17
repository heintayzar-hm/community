/* eslint-disable react-refresh/only-export-components */

import { lazy } from 'react';
import { ROUTES } from '../constants.js';
import Loading from '../components/Loading/Loading';

// nav bar routes
const Home = lazy(() => import('../pages/HomePage/HomePage'));
const MutualFriends = lazy(() => import('../pages/MutualFriendsPage/MutualFriendsPage'));
const CommunityFeed = lazy(() => import('../pages/CommunityFeedPage/CommunityFeedPage'));

// side bar routes
const Profile = lazy(() => import('../pages/ProfilePage/ProfilePage'));
const Settings = lazy(() => import('../pages/SettingPage/SettingPage'));
// lazy load routes
export default [
  // nav bar routes
  {
    path: ROUTES.HOME.path,
    element: <Home />,
    fallback: <Loading />
  },
  {
    path: ROUTES.MUTUAL_FRIENDS.path,
    element: <MutualFriends />,
    fallback: <Loading />
  },
  {
    path: ROUTES.COMMUNITY_FEED.path,
    element: <CommunityFeed />,
    fallback: <Loading />
  },
  // side bar routes
  {
    path: ROUTES.PROFILE.path,
    element: <Profile />,
    fallback: <Loading />
  },
  {
    path: ROUTES.SETTING.path,
    element: <Settings />,
    fallback: <Loading />
  }
];
