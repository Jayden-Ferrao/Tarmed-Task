import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const FormContainer = styled.ScrollView`
  padding-horizontal: 1px;
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

export const HalfInputContainer = styled.View`
  flex: 1;
  margin-horizontal: 8px;
`;

export const DimensionInput = styled.View`
  flex: 1;
  margin-horizontal: 4px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: blue;
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
  justify-content: center;
`;

export const CameraIcon = styled.View`
  margin-right: 8px;
`;

export const AddButtonText = styled.Text`
  color: blue;
  font-size: 16px;
  font-weight: 500;
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

export const InputWithIcon = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const InputWithIconText = styled.TextInput`
  flex: 1;
  padding-right: 30px;
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
`;

export const LocationIcon = styled.View`
  position: absolute;
  right: 10px;
`;

export const ImagePreviewContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ImagePreview = styled.Image`
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 8px;
`;

export const ImagePreviewWrapper = styled.View`
  position: relative;
`;

export const DeleteIcon = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border-radius: 10px;
  padding: 2px;
  z-index: 1;
`;

