import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';

interface SquareProps {
  title: string;
  subtitle: string;
  subtitledesp: string;
  distance: string;
  price: string;
  style?: ViewStyle;
}

const Square: React.FC<SquareProps> = ({ title, subtitle, subtitledesp, distance, price, style }) => {
  return (
    <View style={[styles.square, style]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Ionicons name="document-outline" size={30} color="grey" style={styles.icon} /> 
        <View>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.subtitledesp}>{subtitledesp}</Text>
        </View>
      </View>
      <Text style={styles.distance}>{distance}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default Square;
