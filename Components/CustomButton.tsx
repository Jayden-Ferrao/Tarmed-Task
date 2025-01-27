import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button, ButtonText } from '../app/_styles/_HomeStyles';

interface CustomButtonProps {
  title: string;
  color: string;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomButton = React.forwardRef<any, CustomButtonProps>(({ title, color, onPress }, ref) => {
  return (
    <Button style={{ backgroundColor: color }} onPress={onPress} ref={ref}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
});

export default React.memo(CustomButton);
