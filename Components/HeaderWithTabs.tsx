import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  HeaderContainerDetails,
  HeaderTitleContainerCross,
  CloseIcon,
  IconContainer,
  HeaderDetails,
  ChatIcon,
  UserIcon,
  TabsContainer,
  Tab,
  TabSeparator
} from './styles/HeaderWithTabsStyles';

interface HeaderWithTabsProps {
  title: string;
  activeTab: 'Details' | 'Delivery' | 'Payments';
  onClose: () => void;
}

const HeaderWithTabs = React.forwardRef<any, HeaderWithTabsProps>(({ title, activeTab, onClose }, ref) => {
  return (
    <>
      <HeaderContainerDetails>
        <HeaderTitleContainerCross>
          <Ionicons
            name="close-outline"
            size={24}
            color="white"
            style={CloseIcon}
            onPress={onClose}
          />
          <HeaderDetails>{title}</HeaderDetails>
        </HeaderTitleContainerCross>
        <IconContainer>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" style={ChatIcon} />
          <Ionicons name="person-outline" size={24} color="white" style={UserIcon} />
        </IconContainer>
      </HeaderContainerDetails>
      <TabsContainer>
        <Tab isActive={activeTab === 'Details'}>Details</Tab>
        <TabSeparator />
        <Tab isActive={activeTab === 'Delivery'}>Delivery</Tab>
        <TabSeparator />
        <Tab isActive={activeTab === 'Payments'}>Payments</Tab>
      </TabsContainer>
    </>
  );
});

export default React.memo(HeaderWithTabs);
