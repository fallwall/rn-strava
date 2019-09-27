import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
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
      dispatch({ type: 'add_error', payload: 'Something is not right.' })
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
    errorMessage: '',
  },
);