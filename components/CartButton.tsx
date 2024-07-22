import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ShoppingCart } from 'iconsax-react-native';
import useCart from '../hooks/useCart';

export default function CartButton({ openCart }: { openCart: () => void }) {
  const { cart } = useCart();
  
  return (
    <View style={styles.container}>
      <View style={styles.indicator}>
        {cart.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cart.length}</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={openCart}
        >
          <ShoppingCart size="24" variant="TwoTone" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  indicator: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -10,
    left: -10,
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#A3A3A3',
    borderRadius: 30,
    padding: 10,
  },
});
