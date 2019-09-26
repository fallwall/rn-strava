import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

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

const styles = StyleSheet.create({});

export default SignupScreen;