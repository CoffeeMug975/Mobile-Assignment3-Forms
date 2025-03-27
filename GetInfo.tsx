// Bariso's Code


import React from 'react';
import { View, Text, Button } from 'react-native';

import SignUpData from './SignUp.tsx'

import employeesData from './employees.json'

export default function GetInfo({ navigation }: any) {

  const [employees, setEmployees] = useState(employeesData);

  const sortedItems = [...employees].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });


  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text>Get Info Page</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />

    <div>
      <ul>
        {sortedItems.map((item) => (
          <employeesData key={employees.firstName} {...employees} />
        ))}
      </ul>
    </div>
    </View>
  );
}