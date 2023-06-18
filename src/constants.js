export const ROUTES = {
  HOME: {
    path: '/',
    name: 'Home'
  },
  ABOUT: {
    path: '/about',
    name: 'About'
  },
  CONTACT: {
    path: '/contact',
    name: 'Contact'
  },
  POSTS: {
    path: '/posts',
    name: 'Posts',
    route: {
      path: '/posts/:id'
    }
  },
  PROFILE: {
    path: '/profile',
    name: 'Profile'
  },
  SETTING: {
    path: '/setting',
    name: 'Setting'
  },
  COMMUNITY_FEED: {
    path: '/community-feed',
    name: 'Community Feed'
  },
  MUTUAL_FRIENDS: {
    path: '/mutual-friends',
    name: 'Mutual Friends'
  },
  AUTH: {
    path: '/auth',
    name: 'Auth',
    children: {
      LOGIN: {
        path: '/login',
        name: 'Login'
      },
      REGISTER: {
        path: '/register',
        name: 'Register'
      }
    }
  },
  NOT_FOUND: {
    path: '*',
    name: 'Not Found'
  }
};

export const APP = {
  NAME: 'Community',
  LOGO_PATH: 'react'
};

export const API = {
  BASE_URL: 'https://task.htwettoe.com/api/v1',
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout'
    },
    POSTS: {
      NEWSFEED: '/posts/newsfeed?page=:id',
      LIKE: '/posts/react',
      POST: '/posts/qa/:id',
      GET_COMMENTS: '/posts/comments?content_id=:id',
      COMMENT: '/posts/comments'
    }
  },
  IMAGE_URL: 'https://htv2prod.blob.core.windows.net/htwettoe/'
};
