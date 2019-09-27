import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry={true}
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer />
      <Spacer>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <Button
          title={submitButtonText}
          onPress={onSubmit}
        />
      </Spacer>
    </>
  )
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
