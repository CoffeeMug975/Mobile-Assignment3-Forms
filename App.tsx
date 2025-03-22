import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import GetInfo from './GetInfo';

const Stack = createNativeStackNavigator();

const Home = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
    <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} />
    <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
    <Button title="Go to Get Info" onPress={() => navigation.navigate('GetInfo')} />
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="GetInfo" component={GetInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
