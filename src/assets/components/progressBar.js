import React from 'react';
import { SafeAreaView, TouchableOpacity, Text ,View} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function ProgressBar({one,two,three,twoBorder,threeBorder,fourBorder}) {
  const navigation = useNavigation()
  return (
    <View flexDirection='row' 
    justifyContent='space-around'
    alignItems='center'
    style={{
        marginLeft:30,
        marginRight:30,
        borderRadius:30
    }}>
      <View justifyContent='center'
        alignItems='center'
        style={{
          height:10,
          backgroundColor:'#52FFD5',
          width:'13.5%'}}/>
        <View justifyContent='center'
          alignItems='center' 
          style={{
            height:25,
            width:25,
            borderRadius:25/2,
            borderWidth:2,
            borderColor:'#52FFD5',
            backgroundColor:one,
            zIndex:1
        }} >
          <Text style={{fontSize:10}}>1</Text>
        </View>
        <View justifyContent='center'
        alignItems='center'
        style={{
          height:10,
          backgroundColor:twoBorder,
          width:'13.5%'}}/>
        <View justifyContent='center'
        alignItems='center'
        style={{
          height:10,
          backgroundColor:twoBorder,
          width:'13.5%'}}/>
        <View justifyContent='center'
        alignItems='center'
        style={{
            height:25,
            width:25,
            borderRadius:25/2,
            borderWidth:2,
            borderColor:twoBorder,
            backgroundColor:two,
            zIndex:1
        }}><Text style={{fontSize:10}}>2</Text>
        </View>
        <View justifyContent='center'
        alignItems='center'
        style={{
          height:10,
          backgroundColor:threeBorder,
          width:'13.5%'}}/>
          <View justifyContent='center'
        alignItems='center'
        style={{
          height:10,
          backgroundColor:threeBorder,
          width:'13.5%'}}/>
        <View justifyContent='center'
        alignItems='center'
        style={{
            height:25,
            width:25,
            borderRadius:25/2,
            borderWidth:2,
            borderColor:threeBorder,
            backgroundColor:three,
            zIndex:1
        }}><Text style={{fontSize:10}}>3</Text>
        </View>
        <View justifyContent='center'
        alignItems='center'
        style={{
          height:10,
          backgroundColor:fourBorder,
          width:'13.5%'}}/>
    </View>
  );
}