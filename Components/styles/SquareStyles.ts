import styled from 'styled-components/native';

export const SquareContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Square = styled.View`
  padding: 15px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 5px;
  margin: 5px;
  width: 170px;
  background-color: #f9f9f9;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  background-color: #E8F9FF;
  border-radius: 10px;
  padding-horizontal: 8px;
  padding-vertical: 3px;
  align-self: flex-start;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  color: #74c76d;
  font-weight: bold;
  font-size: 13px;
`;
export const SubtitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;

export const Subtitle = styled.Text`
  color: grey;
`;

export const SubtitleDesp = styled.Text`
  color: black;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Distance = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  position: absolute;
  right: 10px;
  top: 17px;
`;

export const PriceContainer = styled.View`
  background-color:rgb(217, 240, 249);
  padding-horizontal: 8px;
  padding-vertical: 5px;
  width: 122%;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  border-bottom-right-radius: 5px;
`;

export const Price = styled.Text`
  font-weight: bold;
  color: blue;
  font-size: 16px;
`;