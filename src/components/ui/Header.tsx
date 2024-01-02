import { View, Text } from 'react-native'
import React from 'react'
import LogoText from './LogoText'

const Header = () => {
  return (
    <View style = {{justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
      <LogoText/>
      <Text>
        G
      </Text>
    </View>
  )
}

export default Header