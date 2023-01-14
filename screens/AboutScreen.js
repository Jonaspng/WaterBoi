import { View, SafeAreaView, Text, Linking, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Link, useNavigation } from '@react-navigation/native'

const AboutScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    })
  }, [])

  return (
    <SafeAreaView>
      <View className="p-4">
       <Button title="Github Repository" onPress={ ()=>{ Linking.openURL('https://github.com/Jonaspng/WaterBoi')}} />
      </View>
    </SafeAreaView>
  )
}

export default AboutScreen