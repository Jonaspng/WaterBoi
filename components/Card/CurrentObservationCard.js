import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CurrentObservationCard = (props) => {
  const { uri, description } = props;
  const imageURIPath = Image.resolveAssetSource(uri).uri;

  return (
    <TouchableOpacity className="flex-row justify-between p-4 bg-[#5773FF] rounded-md">
      <View>
        <Image
          source={{
            uri: imageURIPath
          }}
          className="h-20 w-20 rounded-full"
        />
        <Text className="text-white font-bold text-2xl pt-6">
          {description}
        </Text>
      </View>
      <View>
        <Text className="text-white font-bold text-4xl pt-6">30°C</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CurrentObservationCard