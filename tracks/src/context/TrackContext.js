import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const resp = await trackerApi.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: resp.data });
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  [],
);