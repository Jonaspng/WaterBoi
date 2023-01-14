import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { cupVolume } from '../../storage/defaultValues';
import { getData, storeData } from '../../storage/storage';

const ModalContent = () => {
  const [cups, setCups] = useState("");

  const handleConfirmPress = async () => {
    const currentDate = new Date();
    const volumeToAdd = cupVolume * cups;
    const dataObj = {
      "cups": cups,
      "volume": volumeToAdd,
      "time_created": currentDate.toLocaleTimeString(),
      "date_created": currentDate.toLocaleDateString()
    }

    const data = await getData("@datawater")

    if (data) {
      await storeData("@datawater", [dataObj, ...data]);
    } else {
      await storeData("@datawater", [dataObj])
    }

    console.log(await getData("@datawater"))
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