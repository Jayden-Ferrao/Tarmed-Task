import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  Square as SquareContainer,
  TitleContainer,
  Title,
  SubtitleContainer,
  Subtitle,
  SubtitleDesp,
  Distance,
  PriceContainer,
  Price
} from '../styles/HomeStyles';

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
    <SquareContainer style={style}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <SubtitleContainer>
        <Ionicons name="document-outline" size={30} color="grey" style={{ marginRight: 10, marginBottom: 25 }} />
        <View>
          <Subtitle>{subtitle}</Subtitle>
          <SubtitleDesp>{subtitledesp}</SubtitleDesp>
        </View>
      </SubtitleContainer>
      <Distance>{distance}</Distance>
      <PriceContainer>
        <Price>{price}</Price>
      </PriceContainer>
    </SquareContainer>
  );
};

export default Square;
