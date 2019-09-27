import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
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
        {state.errorMessage ? <Text style={styles.error}>{state.errorMessage}</Text> : null}
        <Button
          title="Sign Up"
          onPress={() => signup({ email, password })}
        />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(`Signin`)}>
        <Spacer>
          <Text style={styles.link}> Already have an account? Sign In here. </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  )
};

SignupScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
  },
  link: {
    color: 'blue',
  }
});

export default SignupScreen;