export const SLICES = {
  ROOT_SLICE: {
    NAME: 'root'
  },
  USER_SLICE: {
    NAME: 'user',
    INITIAL_STATE: {
      darkMode: false,
      isLoggedIn: false,
      token: null,
      expiresAt: null,
      expiresIn: null,
      details: {
        id: null,
        name: null,
        profile_image: null,
        last_active_at: null
      },
      error: null
    },
    THUNK_ACTIONS: {
      LOGIN: 'user/login',
      REGISTER: 'user/register'
    }
  }
};

export const whitelist = [SLICES.USER_SLICE.NAME];
