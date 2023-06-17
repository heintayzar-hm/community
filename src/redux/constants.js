export const SLICES = {
  ROOT_SLICE: {
    NAME: 'root'
  },
  USER_SLICE: {
    NAME: 'user',
    INITIAL_STATE: {
      name: '',
      email: '',
      darkMode: false,
      isLoggedIn: false
    }
  }
};

export const whitelist = [SLICES.USER_SLICE.NAME];
