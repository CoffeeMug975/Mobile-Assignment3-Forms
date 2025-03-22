import React from 'react';
import { View, Text, Button } from 'react-native';

export default function GetInfo({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text>Get Info Page</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
