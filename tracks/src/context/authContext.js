import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // code
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // code
  };
};

const signout = (dispatch) => {
  return () => {
    // code
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  {
    isSignedIn: false,
  },
);