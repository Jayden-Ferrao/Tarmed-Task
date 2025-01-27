import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const FormContainer = styled.ScrollView`
  padding-horizontal: 16px;
  padding-top: 10px;
`;

export const LabelHeader = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-vertical: 8px;
  color: #333;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-vertical: 8px;
  color: #333;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
`;

export const Error = styled.Text`
  font-size: 12px;
  color: red;
  margin-bottom: 8px;
`;

export const NextButton = styled.TouchableOpacity`
  flex: 1.1;
  background-color: blue;
  border-radius: 8px;
  padding: 12px;
  align-items: center;
`;

export const NextButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputWithIcon = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
  borderWidth: 1px;
  borderColor: lightgray;
  borderRadius: 5px;
  padding: 10px;
`;

export const InputWithIconText = styled.TextInput`
  flex: 1;
  padding-right: 30px;
`;

export const LocationIcon = styled.View`
  position: absolute;
  right: 10px;
`;

export const SetPrecise = styled.Text`
  color: #007BFF;
  margin-bottom: 16px;
  text-align: right;
  padding-top: 8px;
`;

export const DateTimeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
    padding-top: 8px;
`;

export const DateTimeField = styled.View`
  flex: 1;
  margin-horizontal: 4px;
`;

export const DateLabel = styled.Text`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const PreviousButton = styled.TouchableOpacity`
  flex: 0.5;
  border-width: 1px;
  border-color: #007BFF;
  border-radius: 8px;
  padding: 12px;
  margin-right: 8px;
  align-items: center;
`;

export const PreviousText = styled.Text`
  color: #007BFF;
  font-size: 16px;
  font-weight: 500;
`;
export const SaveDraft = styled.Text`
  color: #007BFF;
  text-align: right;
  margin-vertical: 8px;
`;

export const ToggleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 8px;
`;

export const ButtonContainerDelivery = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 103px;
`;
