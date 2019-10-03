import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 50 }}>
        {track.name}
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
      >
        <Polyline
          coordinates={track.locations.map(l => l.coords)}
        />
      </MapView>
    </>
  )
};

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

export default TrackDetailScreen;
