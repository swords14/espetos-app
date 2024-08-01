// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Src/LoginScreen';
import ForgotPasswordScreen from './Src/ForgotPasswordScreen';
import SignUpScreen from './Src/SignUpScreen';
import HomeScreen from './Src/HomeScreen';
import ProductDetailScreen from './Src/ProductDetailScreen';
import CartScreen from './Src/CartScreen';
import ConfirmationScreen from './Src/ConfirmationScreen'; 
import { CartProvider } from './Src/CartContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;