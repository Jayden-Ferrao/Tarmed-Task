import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const FormContainer = styled.ScrollView`
  padding-horizontal: 16px;
  padding-top: 10px;
`;

export const HeaderContainerDetails = styled.View`
  background-color: blue;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitleContainerCross = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CloseIcon = styled.View`
  margin-right: 5px;
`;

export const HeaderDetails = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: left;
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

export const TextArea = styled.TextInput`
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 8px;
  padding: 12px;
  height: 80px;
  text-align-vertical: top;
`;

export const Error = styled.Text`
  font-size: 12px;
  color: red;
  margin-bottom: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
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

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 8px;
  margin-bottom: 25px;
`;

export const Checkbox = styled.View`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const CheckboxLabel = styled.Text`
  font-size: 16px;
  color: #333;
  flex: 1;
`;

export const SaveDraft = styled.Text`
  color: #007BFF;
  margin-top: 8px;
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

export const NextText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: blue;
  padding-vertical: 12px;
`;

export const Tab = styled.Text`
  background-color: white;
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
  color: blue;
`;

export const ActiveTab = styled.Text`
  color: blue;
  font-weight: bold;
`;

export const TabSeparator = styled.View`
  height: 1px;
  width: 45px;
  background-color: #ccc;
`;

export const ContentContainer = styled.View`
  padding: 16px;
`;

export const PaymentDetailsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const PriceOptionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PriceOption = styled.TouchableOpacity`
  background-color: #e7f4f8;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  margin-bottom: 8px;
  margin-horizontal: 4px;
`;

export const PriceText = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: 600;
`;

export const CheckboxText = styled.Text`
  margin-left: 8px;
  font-size: 14px;
  color: #333;
`;

export const PriceOptionsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceBreakdownContainer = styled.View`
  background-color: #e7f4f8;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 16px;
`;

export const BreakdownTextLabel = styled.Text`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const BreakdownText = styled.Text`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

export const AmountText = styled.Text`
  color: grey;
  font-weight: 500;
`;

export const BreakdownRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainerPayments = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 219px;
`;

export const PreviousButtonText = styled.Text`
  color: #333;
  font-size: 14px;
`;

export const PaymentButton = styled.TouchableOpacity`
  flex: 1.1;
  background-color: blue;
  border-radius: 8px;
  padding: 12px;
  align-items: center;
`;

export const PaymentButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;
