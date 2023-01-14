import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import TemperatureIcon from '../../assets/weather.png'
import CategoryCard from '../Card/CategoryCard';

const CategoryView = () => {
  const categoryData = [
    {
      title: 'Temperature',
      uri: TemperatureIcon
    }, 
    {
      title: 'Wind',
      uri: TemperatureIcon
    }, 
    {
      title: 'Humidity',
      uri: TemperatureIcon
    }, 
    {
      title: 'UV',
      uri: TemperatureIcon
    }
  ]

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categoryData.map((item, idx) => {
        return (
          <CategoryCard key={idx} title={item.title} uri={item.uri} />
        )
      })}
    </ScrollView>
  )
}

export default CategoryView