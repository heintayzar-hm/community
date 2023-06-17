export const ROUTES = {
  HOME: {
    path: '/',
    name: 'Home',
  },
  ABOUT: {
    path: '/about',
    name: 'About',
  },
  CONTACT: {
    path: '/contact',
    name: 'Contact',
  },
  PROFILE: {
    path: '/profile',
    name: 'Profile',
  },
  SETTING: {
    path: '/setting',
    name: 'Setting',
  },
  AUTH: {
    path: '/auth',
    name: 'Auth',
    children: {
      LOGIN: {
        path: '/login',
        name: 'Login',
      },
      REGISTER: {
        path: '/register',
        name: 'Register',
      },
    }
  },
  NOT_FOUND: {
    path: '*',
    name: 'Not Found',
  },
};
