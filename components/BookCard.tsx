import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import useCart from '../hooks/useCart';

interface BookCardProps {
  title: string;
  price: number;
  image: string;
  id: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, price, image, id }) => {
  const { addToCart } = useCart();

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>Price: ${price}</Text>
        <Button
          title="Add to Cart"
          onPress={() => {
            addToCart({
              id,
              title,
              price,
              image,
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  details: {
    flexDirection: 'column',
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default BookCard;
