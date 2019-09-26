import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const resp = await trackerApi.post('/signup', { email, password });
      console.log(resp.data);
    } catch (err) {
      console.log(err.response.data);
    }
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