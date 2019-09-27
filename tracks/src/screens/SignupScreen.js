import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/authContext';


const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate(`Signin`)}>
        <Spacer>
          <Text style={styles.link}> Already have an account? Sign In here. </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
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
  link: {
    color: 'blue',
  },
});

export default SignupScreen;