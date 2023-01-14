import { View, Text, TouchableOpacity, Image, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Button, Modal, Portal } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


import ModalContent from './ModalContent';
import { getData, storeData } from '../../storage/storage';
import { cupVolume } from '../../storage/defaultValues';
import CupImage from '../../assets/cup.png'
const CupImageIcon = Image.resolveAssetSource(CupImage).uri;

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

  const onChangeText = cups => {
    setCups(cups);
  }

  const handleConfirmPress = async () => {
    const currentDate = new Date();
    const volumeToAdd = cupVolume * cups;
    const dataObj = {
      "cups": cups,
      "volume": volumeToAdd,
      "time": Platform.OS === 'ios' ? currentDate.toLocaleTimeString([], {timeStyle: 'short'}) : currentDate.toLocaleTimeString().slice(0, currentDate.toLocaleTimeString.length - 3),
      "date_created": currentDate.toLocaleDateString()
    }

    if (parseInt(cups) === 0 || cups === "") {
      alert("Cups cannot be zero or empty!")
    } else {
      setWaterData([dataObj, ...waterData]);
      setData([dataObj, ...waterData])
      if (waterData.length > 0) {
        await storeData("@datawater", [dataObj, ...waterData]);
      } else {
        await storeData("@datawater", [dataObj])
      }
      hideModal()
    }
    // console.log(await getData("@datawater"))
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
      <Card className="p-5">
        <View className="mr-auto ml-auto text-center -mb-24">
          <AnimatedCircularProgress
            arcSweepAngle={180}
            rotation={270}
            size={300}
            width={20}
            fill={cupVolume * waterData.reduce((x, y) => x + parseInt(y.cups), 0) * 100 / 3300}
            tintColor="#5773FF"
            backgroundColor="#d3d3d3">
            {
              (fill) => {
                return (
                  <View className="-mt-4">
                    <Image
                      source={{
                        uri: CupImageIcon
                      }}
                      className="h-24 w-24 bg-transparent rounded-md mx-auto"
                    />
                    <Text className="text-2xl font-bold">
                      {cupVolume * waterData.reduce((x, y) => x + parseInt(y.cups), 0)} / 3300ml
                    </Text>
                  </View>
                )
              }
            }
          </AnimatedCircularProgress>
        </View>
        <View className="flex-col pt-2 mx-auto">
          <Button onPress={showModal} className="rounded-full" mode="contained">
            <Text className="text-lg font-bold">
              Add
            </Text>
          </Button>
        </View>
      </Card>
    </View>
  )
}

export default WaterProgress