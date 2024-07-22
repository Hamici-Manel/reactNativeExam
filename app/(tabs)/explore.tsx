import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ExploreScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Image source={require('../../assets/images/the-hobbit.jpg')} style={styles.image} />
      {/* Add more content here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginVertical: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ExploreScreen;
