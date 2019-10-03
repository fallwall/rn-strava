import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, recording);
  }, [recording]);
  const [err] = useLocation(isFocused || recording, callback);


  return (
    <SafeAreaView>
      <Text h3>
        TrackCreate Screen
    </Text>
      <Map />
      <TrackForm />
      {err ? <Text>Please enable location service</Text> : null}
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <MaterialIcons
    name="add-location"
    size={25}
  />,
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);