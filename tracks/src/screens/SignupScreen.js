import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const SignupScreen = ({ navigation }) => {
  return (
    <>
    <Text style={{ fontSize: 50 }}>
      Signup Screen Here
    </Text>
      <Button
        title="go to Sign In"
        onPress={()=> navigation.navigate('Signin')}
      />
      <Button
        title="go to main flow"
        onPress={()=> navigation.navigate('mainFlow')}
      />
      </>
  )
};

SignupScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({});

export default SignupScreen;