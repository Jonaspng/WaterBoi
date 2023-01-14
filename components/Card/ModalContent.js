import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

const ModalContent = () => {
  const [cups, setCups] = useState("");

  const handleConfirmPress = () => {
    
  }

  return (
    <View>
      <Text className="text-lg font-semibold pb-1">Track your water intake</Text>
      <Text className="text-base font-semibold pb-2 text-orange-700">Volume of your cup / bottle: 300ml</Text>
      <TextInput
        keyboardType='number-pad'
        label="Cups"
        value={cups}
        onChangeText={cups => setCups(cups)}
      />
      <View className="h-4" />
      <Button
        className="mx-28"
        mode='contained'
        onPress={handleConfirmPress}
      >
        <Text className="font-bold">
          Confirm
        </Text>
        </Button>
    </View>
  )
}

export default ModalContent