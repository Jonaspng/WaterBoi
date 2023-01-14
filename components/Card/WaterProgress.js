import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ProgressBar, MD3Colors, Button, Modal, Portal } from 'react-native-paper';
import ModalContent from './ModalContent';

const WaterProgress = () => {
  const [visible, setVisible] = useState(false)
  const showModal = () => setVisible(() => true)
  const hideModal = () => setVisible(() => false)
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View className="px-2">
      <Portal>
        <Modal className="p-4" visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <ModalContent />
        </Modal>
      </Portal>
      <View className="align-middle justify-between px-4 py-10 bg-white rounded-md">
        <View className="text-center px-8 pb-4">
          <Text className="text-center text-4xl pb-2">1000 ml / 2000 ml</Text>
          <ProgressBar className="h-4" progress={0.5} color={MD3Colors.tertiary50}/>
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