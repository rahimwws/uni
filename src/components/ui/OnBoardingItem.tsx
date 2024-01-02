import { View, Text, useWindowDimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../../utils/styles/colors'
import indentation from '../../utils/styles/indentation'

type Props = {
    item:any
}

const OnBoardingItem = (props:Props) => {
    const width = useWindowDimensions()
  return (
    <View style = {[styles.container,width]}>
      <Text style = {styles.text}>{props.item.title}</Text>
      {props.item.image}
    </View>
  )
}

export default OnBoardingItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        marginTop:50,
        paddingHorizontal:indentation.pg
    },
    text:{
        textAlign:"center",
        fontSize:32,
        color:colors.black,
        fontFamily:"mon-sb"
    }
})