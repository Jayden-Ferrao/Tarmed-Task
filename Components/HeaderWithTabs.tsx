import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';

const HeaderWithTabs: React.FC<{
  title: string;
  activeTab: 'Details' | 'Delivery' | 'Payments';
  onClose: () => void;
}> = ({ title, activeTab, onClose }) => {
  return (
    <>
      <View style={styles.headerContainerDetails}>
        <View style={styles.headerTitleContainerCross}>
          <Ionicons
            name="close-outline"
            size={24}
            color="white"
            style={styles.closeIcon}
            onPress={onClose}
          />
          <Text style={styles.headerDetails}>{title}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" style={styles.chatIcon} />
          <Ionicons name="person-outline" size={24} color="white" style={styles.userIcon} />
        </View>
      </View>
      <View style={styles.tabsContainer}>
        <Text style={[styles.tab, activeTab === 'Details' && styles.activeTab]}>Details</Text>
        <View style={styles.tabSeparator} />
        <Text style={[styles.tab, activeTab === 'Delivery' && styles.activeTab]}>Delivery</Text>
        <View style={styles.tabSeparator} />
        <Text style={[styles.tab, activeTab === 'Payments' && styles.activeTab]}>Payments</Text>
      </View>
    </>
  );
};

export default HeaderWithTabs;
