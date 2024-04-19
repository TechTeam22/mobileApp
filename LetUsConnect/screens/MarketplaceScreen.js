import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MarketplaceScreen = () => {
  const navigation = useNavigation();

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      seller: 'Seller 1'
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$20',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      seller: 'Seller 2'
    },
    // Add more products here
  ];

  const handleProductPress = (productId) => {
    // Navigate to the product detail screen passing the product ID
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marketplace</Text>
      {products.map((product) => (
        <TouchableOpacity key={product.id} style={styles.product} onPress={() => handleProductPress(product.id)}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  product: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  },
});

export default MarketplaceScreen;
