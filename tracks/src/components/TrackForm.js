import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          onChange={changeName}
          value={name}
          placeholder="name of the track"
        />
      </Spacer>
      {recording
        ? <Button
        onPress={stopRecording}
        title="Stop"
      />
        :
        <Button
          onPress={startRecording}
          title="Record"
        />
      }
    </>
  )
}

export default TrackForm;
