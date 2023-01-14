import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProgressBar, MD3Colors, Button, Modal, Portal } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


import ModalContent from './ModalContent';
import { getData, storeData } from '../../storage/storage';
import { cupVolume } from '../../storage/defaultValues';

const WaterProgress = (props) => {
  const [visible, setVisible] = useState(false)
  const [cups, setCups] = useState("");
  const { data, setData } = props;
  const [waterData, setWaterData] = useState(data);
  const showModal = () => setVisible(() => true)
  const hideModal = () => {

    setVisible(() => false)
  }
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  const onChangeText = cups => setCups(cups);

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
    setWaterData([dataObj, ...waterData]);
    setData([dataObj, ...waterData])
    if (waterData.length > 0) {
      await storeData("@datawater", [dataObj, ...waterData]);
    } else {
      await storeData("@datawater", [dataObj])
    }

    // console.log(await getData("@datawater"))
    hideModal()
  }

  const getTotalCups = (arr) => {
    let total = 0;
    for (let item of arr) {
      total += parseInt(item.cups)
    }

    return total;
  }

  return (
    <View className="px-2">
      <Portal>
        <Modal className="p-4" visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <ModalContent cups={cups} handleConfirmPress={handleConfirmPress} onChangeText={onChangeText} />
        </Modal>
      </Portal>
      <View className="align-middle justify-between px-4 py-10 bg-white rounded-md">
        <View className="text-center px-8 -mb-24">
          <AnimatedCircularProgress
            arcSweepAngle={180}
            rotation={270}
            size={300}
            width={20}
            fill={cupVolume * waterData.reduce((x, y) => x + parseInt(y.cups), 0) * 100 / 3300}
            tintColor="#5773FF"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#d3d3d3">
              {
                (fill) => {
                  return (
                    <View className="px-4 -mt-4">
                      <Text className="text-2xl font-bold">
                        {cupVolume * waterData.reduce((x, y) => x + parseInt(y.cups), 0)} / 3300ml
                      </Text>
                    </View>
                  )
                }
              }
            </AnimatedCircularProgress>
        </View>
        <View className="flex-col px-32">
          <Button onPress={showModal} className="rounded-full" mode="contained">
            <Text className="text-lg font-bold">
              Add
            </Text>
          </Button>
        </View>
      </View>
    </View>
  )
}

export default WaterProgress