import React from 'react';
import { SafeAreaView, TouchableOpacity , Text } from 'react-native';

export default function RoundedTouchable({text}) {
  return (
    <SafeAreaView
      //style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <TouchableOpacity
            style={{paddingLeft:14,
                justifyContent: "center",
                backgroundColor:'rgba(49,49,49,0.05)',
                height:49,
                marginLeft:30,
                marginRight:30,
                marginTop:5,
                borderTopLeftRadius: 5,
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
            }}>
        <Text style={{ color: '#313131',fontSize:14 }}>{text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}