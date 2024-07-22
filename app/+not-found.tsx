// app/+not-found.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404 Not Found</Text>
      <Text style={styles.message}>The page you are looking for does not exist.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginVertical: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NotFoundScreen;
