import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Square from '../Components/Square';
import CustomButton from '../Components/CustomButton';
import MapImg from '../assets/map.png';
import {
  Container,
  Header,
  HeaderTextTitle,
  HeaderTextDesp,
  HeaderIcons,
  NotifyDot,
  SearchBar,
  SearchInput,
  SearchIcon,
  BottomContainer,
  HorizontalScroll,
} from '../styles/HomeStyles';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <ImageBackground source={MapImg} style={{ flex: 1 }}>
            <Header>
              <HeaderTextTitle>TARMED</HeaderTextTitle>
              <HeaderIcons>
                <Ionicons name="chatbubble-outline" size={24} color="white" />
                <View style={{ position: 'relative' }}>
                  <Ionicons name="menu" size={24} color="white" />
                  <NotifyDot />
                </View>
              </HeaderIcons>
            </Header>
            <SearchBar>
              <SearchInput
                placeholder="Search here"
                placeholderTextColor="grey"
              />
              <Ionicons name="search" size={20} color="black" style={SearchIcon} />
            </SearchBar>
            <BottomContainer>
              <HeaderTextDesp>Parcels around you</HeaderTextDesp>
              <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
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
              </HorizontalScroll>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <CustomButton title="Send Parcel" color="blue" onPress={() => navigation.navigate('Details')} />
                <CustomButton title="Deliver Parcel" color="green" onPress={() => alert('Delivered Parcel')} />
              </View>
              {/* <StatusBar style="auto" /> */}
            </BottomContainer>
          </ImageBackground>
        </Container>
      </SafeAreaView>
    );
  }

  export default HomeScreen;