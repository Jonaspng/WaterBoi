import { View, SafeAreaView, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const AboutScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    })
  }, [])

  return (
    <SafeAreaView>
      <View>
        <Text>AboutScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default AboutScreen