import React from 'react';
import { SafeAreaView, TouchableOpacity,Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function PadIcon({size,TL,TR,BL,BR,color,onPress,text}) {
  const navigation = useNavigation()
  return (
    <SafeAreaView
    style={{alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: color,
            borderTopLeftRadius: TL,
            borderTopRightRadius: TR,
            borderBottomRightRadius: BR,
            borderBottomLeftRadius: BL,
            height:size,
            width:size,
            margin:5,
            justifyContent:'center'
        }}
        onPress={onPress}>
        <Text style={{fontSize:18,textAlign:'center',}}>{text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}