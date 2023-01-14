import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = (props) => {
  const { title, uri } = props;
  const TemperatureImage = Image.resolveAssetSource(uri).uri;
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: TemperatureImage,
        }}
        className="h-36 w-36 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold p-1">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard