import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../assignment4/screens/HomeScreen';
import LoginScreen from '../assignment4/screens/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} >
      <Stack.Navigator screenOptions={{headerShown:true}}> 
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFD',
  },
});

