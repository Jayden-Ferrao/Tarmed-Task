import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  background-color: blue;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTextTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

export const HeaderTextDesp = styled.Text`
  font-size: 15px;
  left: 10px;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const HeaderIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 60px;
`;

export const Dot = styled.View`
  position: absolute;
  top: -2px;
  right: -2px;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: red;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-color: #ddd;
  border-width: 1px;
  border-radius: 25px;
  margin: 10px;
  padding-horizontal: 10px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 40px;
  color: black;
`;

export const SearchIcon = styled.View`
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  margin: 5px;
  width: 45%;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

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

export const HorizontalScroll = styled.ScrollView`
  flex-direction: row;
  padding-horizontal: 10px;
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

export const Icon = styled.View`
  margin-right: 10px;
  margin-bottom: 25px;
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

export const BottomContainer = styled.View`
  background-color: #fff;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
