import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartCardBook from './CartCardBook';
import useCart from '../hooks/useCart';

export default function Cart() {
  const { cart, clearCart } = useCart();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Your cart</Text>
            <Text style={styles.description}>You can see the items you have added to your cart here.</Text>
          </View>
          {cart.length === 0 ? (
            <Text style={styles.emptyText}>Your cart is empty.</Text>
          ) : (
            <>
              <FlatList
                data={cart}
                renderItem={({ item }) => (
                  <CartCardBook key={item.id} title={item.title} price={item.price} id={item.id} />
                )}
                keyExtractor={(item) => item.id.toString()}
              />
              <View style={styles.actions}>
                <Button
                  title="Checkout"
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('Checkout');
                  }}
                />
                <Button title="Clear Cart" onPress={clearCart} />
              </View>
            </>
          )}
        </View>
      </Modal>
      <Button title="Open Cart" onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  modalHeader: {
    marginBottom: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  closeButtonText: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
