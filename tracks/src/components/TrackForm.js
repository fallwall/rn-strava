import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const saveTrack = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          onChangeText={changeName}
          value={name}
          placeholder="name of the track"
        />
      </Spacer>
      <Spacer>
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
      </Spacer>
      <Spacer>
        {
          !recording && locations.length
            ? (
              <Button
              onPress={()=>saveTrack()}
              title="Save"
              />
            )
            : null
        }
      </Spacer>
    </>
  );
};

export default TrackForm;
