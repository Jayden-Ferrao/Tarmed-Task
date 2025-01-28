import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Square from '@components/Square';
import CustomButton from '@components/CustomButton';
import MapImg from '../assets/map.png';
import { Link } from 'expo-router';
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
} from '../app/_styles/_HomeStyles';
// HomeScreen Page

const HomeScreen = React.forwardRef((props, ref) => {
  const handlePressSend = () => {
  }
  const handlePressDeliver = () => {
    console.log('Button delivered');
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
      <Container ref={ref}>
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
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Link href='/DetailsPage' asChild>
              <CustomButton title="Send Parcel" color="blue" onPress={handlePressSend} />
              </Link>
              <Link href='' asChild>
              <CustomButton title="Deliver Parcel" color="green" onPress={handlePressDeliver} />
              </Link>
            </View>
            <StatusBar style="light" />
          </BottomContainer>
        </ImageBackground>
      </Container>
    </SafeAreaView>
  );
});

export default HomeScreen;