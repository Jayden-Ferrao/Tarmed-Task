import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, TextInput, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';
import Square from '../Components/Square';
import CustomButton from '../Components/CustomButton';
import MapImg from '../assets/map.png';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={MapImg} style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.headerTextTitle}>TARMED</Text>
            <View style={styles.headerIcons}>
              <Ionicons name="chatbubble-outline" size={24} color="white" />
              <View style={{ position: 'relative' }}>
                <Ionicons name="menu" size={24} color="white" />
                <View style={styles.dot} />
              </View>
            </View>
          </View>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search here"
              placeholderTextColor="grey"
            />
            <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.headerTextDesp}>Parcels around you</Text>
            <ScrollView horizontal style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
              <Square
                title="Bergen"
                subtitle="Parcel type"
                subtitledesp="Document"
                distance="16km"
                price="59 kr"
              />
              <Square
                title="Tromsø Mur"
                subtitle="Parcel type"
                subtitledesp="Large"
                distance="35km"
                price="79 kr"
              />
              <Square
                title="Oslo"
                subtitle="Parcel type"
                subtitledesp="Medium"
                distance="10km"
                price="49 kr"
              />
              <Square
                title="Stavanger"
                subtitle="Parcel type"
                subtitledesp="Small"
                distance="20km"
                price="39 kr"
              />
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <CustomButton title="Send Parcel" color="blue" onPress={() => navigation.navigate('Details')} />
              <CustomButton title="Deliver Parcel" color="green" onPress={() => alert('Delivered Parcel')} />
            </View>
            {/* <StatusBar style="auto" /> */}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }

  export default HomeScreen;