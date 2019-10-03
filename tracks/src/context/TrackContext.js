import createDataContext from './createDataContext';
import trackerApi from '../services/trackerApi';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {
  // code
};

const createTrack = dispatch => () => {
  // code
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  [],
);