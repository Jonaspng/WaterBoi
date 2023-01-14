import { View, Text } from 'react-native'
import React from 'react'
import CurrentObservationCard from '../Card/CurrentObservationCard'

import PartlyCloudy from '../../assets/icons8-partly-cloudy-day.gif';

const MainStatusView = () => {
  return (
    <View className="p-2">
      <Text className="text-lg font-bold pb-2">Current Observation</Text>
      <CurrentObservationCard uri={PartlyCloudy} description="Partly Cloudy"/>
    </View>
  )
}

export default MainStatusView