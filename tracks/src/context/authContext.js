import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';
import { navigate } from '../services/navRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const resp = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', resp.data.token);
    dispatch({ type: 'signup', payload: resp.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something is not right.' })
  }
};


const signin = (dispatch) => async ({ email, password }) => {
  try {
    const resp = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', resp.data.token);
    dispatch({ type: 'signup', payload: resp.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something is not right.' })
  }
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
    token: null,
    errorMessage: '',
  },
);