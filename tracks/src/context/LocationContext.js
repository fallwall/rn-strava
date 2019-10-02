import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const startRecording = dispatch => () => {
  // code
};

const stopRecording = dispatch => () => {
  // code
};

const addLocation = dispatch => () => {
  // code
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
  },
  {
    recording: false,
    lcoations: [],
    currentLocation: null,
  },
);
