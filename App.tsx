import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Books from './pages/Books';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import { CartProvider } from './contexts/cart';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="NotFound" component={NotFound} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
