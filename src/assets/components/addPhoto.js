import React from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function AddPhoto({onPress}) {
  const navigation = useNavigation()
  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center' }}
    >
      <TouchableOpacity style={{ backgroundColor: '#D9D9D9',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom:10,
        height:69,
        width:69
        }}
        onPress={onPress}>
      </TouchableOpacity>
    </SafeAreaView>
  );
}