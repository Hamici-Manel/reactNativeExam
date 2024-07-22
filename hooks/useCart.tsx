import React from 'react';
import { View, Text, Button } from 'react-native';
import useCart from '../hooks/useCart'; // Adjust the import path as needed

const SomeComponent: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <View>
      <Text>Cart Items:</Text>
      {cart.map(item => (
        <View key={item.id}>
          <Text>{item.title} - ${item.price}</Text>
          <Button title="Remove from Cart" onPress={() => removeFromCart(item.id)} />
        </View>
      ))}
      <Button title="Clear Cart" onPress={clearCart} />
    </View>
  );
};

export default SomeComponent;
