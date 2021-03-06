import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={{ fontSize: 50 }}>
          Account Screen
    </Text>
        <Spacer>
          <Button
            title="Sign Out"
            onPress={signout}
          />
        </Spacer>
      </SafeAreaView>
    </>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons
    name="comment-account"
    size={25}
  />,
};

const styles = StyleSheet.create({});

export default AccountScreen;