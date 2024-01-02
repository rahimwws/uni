import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/ui/Header'
import indentation from '../../utils/styles/indentation'
import colors from '../../utils/styles/colors'

const Home = () => {
  return (
    <SafeAreaView style = {{paddingLeft:20,flex:1,backgroundColor:colors.black}}>
      <Header/>
    </SafeAreaView>
  )
}

export default Home