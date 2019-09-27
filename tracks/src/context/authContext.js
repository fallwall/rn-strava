import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';
import { navigate } from '../services/navRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_err_msg':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_err_msg' });
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const resp = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', resp.data.token);
    dispatch({ type: 'signin', payload: resp.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something is not right with sign up.'
    })
  }
};


const signin = (dispatch) => async ({ email, password }) => {
  try {
    const resp = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', resp.data.token);
    dispatch({ type: 'signin', payload: resp.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something is not right with signin.'
    })
  }
};

const signout = (dispatch) => {
  return () => {
    // code
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage
  },
  {
    token: null,
    errorMessage: '',
  },
);