export const SLICES = {
  ROOT_SLICE: {
    NAME: 'root'
  },
  USER_SLICE: {
    NAME: 'user',
    INITIAL_STATE: {
      darkMode: false,
      isLoggedIn: false,
      data: {
        details: {
          id: null,
          name: null,
          profile_image: null,
          last_active_at: null
        },
        token: null,
        expiresAt: null,
        expiresIn: null
      },
      error: null
    },
    THUNK_ACTIONS: {
      LOGIN: 'user/login',
      REGISTER: 'user/register'
    }
  },
  POST_SLICE: {
    NAME: 'postState',
    INITIAL_STATE: {
      newFeed: {
        posts: [],
        pageId: null,
        hasNextPage: false
      },
      post: null,
      error: null
    },
    THUNK_ACTIONS: {
      GET_POSTS: 'post/getPosts',
      GET_POST: 'post/getPost',
      GET_NEW_FEED: 'post/getNewFeed'
    }
  }
};

export const whitelist = [SLICES.USER_SLICE.NAME];
export const blacklist = [SLICES.POST_SLICE.NAME];
