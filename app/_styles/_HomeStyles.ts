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

export const NotifyDot = styled.View`
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

export const HorizontalScroll = styled.ScrollView`
  flex-direction: row;
  padding-horizontal: 10px;
`;

export const BottomContainer = styled.View`
  background-color: #fff;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
