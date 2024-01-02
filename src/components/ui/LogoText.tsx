import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../utils/styles/colors'

const LogoText = () => {
  return (
      <Text style = {{fontSize:22,color:colors.white}}>гайд<Text style = {{color:colors.blue}}>.уни</Text></Text>
  )
}

export default LogoText