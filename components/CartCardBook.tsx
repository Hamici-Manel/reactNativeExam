import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import useCart from '../hooks/useCart';

function CartCardBook({ title, price, id }) {
  const { removeFromCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => removeFromCart(id)}
      >
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

CartCardBook.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    flex: 2,
    fontSize: 16,
  },
  price: {
    flex: 1,
    textAlign: 'right',
    fontSize: 16,
  },
  button: {
    flex: 0.5,
    marginLeft: 'auto',
    backgroundColor: '#f44336',
    borderRadius: 20,
    padding: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CartCardBook;
