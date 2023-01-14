import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { cupVolume } from '../../storage/defaultValues';
import { getData, storeData } from '../../storage/storage';

const ModalContent = (props) => {
  const { handleConfirmPress, onChangeText, cups } = props;
  return (
    <View>
      <Text className="text-lg font-semibold pb-1">Track your water intake</Text>
      <Text className="text-base font-semibold pb-2 text-orange-700">Volume of your cup / bottle: 300ml</Text>
      <TextInput
        keyboardType='number-pad'
        label="Cups"
        value={cups}
        onChangeText={onChangeText}
      />
      <View className="h-4" />
      <Button
        className="mx-auto"
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