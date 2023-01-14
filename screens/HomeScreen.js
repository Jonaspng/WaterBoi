import { View, SafeAreaView, Text, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon } from 'react-native-heroicons/solid'
import * as Location from 'expo-location';

import locationPinIcon from '../assets/location.png'
import CategoryView from '../components/Categories/CategoryView'
import MainStatusView from '../components/CurrentStatus/MainStatusView'
const locationPinImage = Image.resolveAssetSource(locationPinIcon).uri;

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const place = await Location.reverseGeocodeAsync({
        latitude : location.coords.latitude,
        longitude : location.coords.longitude
      });
      setLocation(place[0].district);
    })();
  }, [])

  let textLocation = 'Singapore';
  if (errMsg) {
    textLocation = 'Singapore';
  } else if (location) {
    textLocation = location
  }

  return (
    <SafeAreaView>
      <Text>
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: locationPinImage
            }}
            className="h-7 w-7 bg-transparent p-4 rounded-full ml-2"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Current Location</Text>
            <Text className="font-bold text-xl">
              {textLocation}
              <ChevronDownIcon size={16} color='black'/>
            </Text>
          </View>
          <Text className="font-bold text-xl pr-2 text-indigo-700">
            rainorshine
          </Text>
        </View>
      </Text>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <CategoryView />
        <MainStatusView />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen