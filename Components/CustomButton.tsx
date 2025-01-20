import React from 'react';
import styles from '../styles';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
  title: string;
  color: string;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
