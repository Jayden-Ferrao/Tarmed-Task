import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button, ButtonText } from '../styles/HomeStyles';

interface CustomButtonProps {
  title: string;
  color: string;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, color, onPress }) => {
  return (
    <Button style={{ backgroundColor: color }} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default CustomButton;
