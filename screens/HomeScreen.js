import { View, SafeAreaView, Text, Image, ScrollView, Platform } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon } from 'react-native-heroicons/solid'
import * as Location from 'expo-location';
import moment from 'moment/moment';

import locationPinIcon from '../assets/calendar.png'
import CategoryView from '../components/Categories/CategoryView'
import MainStatusView from '../components/CurrentStatus/MainStatusView'
import TodayRecord from '../components/RecordList/TodayRecord';
import WaterProgress from '../components/Card/WaterProgress';
import { getData } from '../storage/storage';

const locationPinImage = Image.resolveAssetSource(locationPinIcon).uri;

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errMsg, setErrorMsg] = useState(null);
  const [waterData, setWaterData] = useState([])
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

    (async () => {
      let data = await getData("@datawater");
      setWaterData(data);
    })

  }, [waterData])

  let textLocation = 'Singapore';
  if (errMsg) {
    textLocation = 'Singapore';
  } else if (location) {
    textLocation = location
  }

  let ViewComponent = View
  if (Platform.OS === 'ios') {
    ViewComponent = SafeAreaView
  } else {
    ViewComponent = View
  }

  return (
    <ViewComponent className={Platform.os == 'android' ? "pt-12" : ""}>
      <Text>
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: locationPinImage
            }}
            className="h-7 w-7 bg-transparent p-4 rounded-md ml-2"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Today is: </Text>
            <Text className="font-bold text-xl">
              {moment().format('dddd')}
            </Text>
          </View>
          <Text className="font-bold text-xl pr-2 text-indigo-700">
            Water Boi
          </Text>
        </View>
      </Text>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        keyboardShouldPersistTaps={'handled'}
      >
        <View className="px-2">
          <Text className="text-2xl font-bold pb-2">Water Intake 💧</Text>
        </View>
        <WaterProgress setData={setWaterData} data={waterData}/>
        <CategoryView />
        <MainStatusView />
        <TodayRecord data = {waterData}/>
      </ScrollView>
    </ViewComponent>
  )
}

export default HomeScreen