import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const FormContainer = styled.ScrollView`
  padding-horizontal: 1px;
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

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: auto;
`;

export const ChatIcon = styled.View`
  margin-right: 20px;
`;

export const UserIcon = styled.View`
  margin-left: 10px;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: blue;
  padding: 10px 0;
`;

export const Tab = styled.Text<{ isActive: boolean }>`
  background-color: white;
  font-size: 16px;
  color: ${({ isActive }: { isActive: boolean }) => (isActive ? 'blue' : 'grey')};
  font-weight: bold;
  border-radius: 3px;
  padding: 5px;
`;

export const ActiveTab = styled(Tab)`
  color: blue;
`;

export const TabSeparator = styled.View`
  width: 25px;
  height: 1px;
  background-color: #ccc;
  align-self: center;
`;
