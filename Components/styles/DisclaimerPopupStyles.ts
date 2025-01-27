import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 85%;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const NoButton = styled.TouchableOpacity`
  flex: 1;
  padding: 12px;
  background-color: #fff;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  align-items: center;
`;

export const YesButton = styled.TouchableOpacity`
  flex: 1;
  padding: 12px;
  background-color: #000080;
  border-radius: 5px;
  align-items: center;
`;

export const NoButtonText = styled.Text`
  color: #000;
`;

export const YesButtonText = styled.Text`
  color: #fff;
`;
