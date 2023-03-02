import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';

export default function RoundedTextInput({value1,value2,value3,value4}) {
  return (
    <SafeAreaView
      //style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <TextInput
            style={{paddingLeft:14,
                backgroundColor:'rgba(49,49,49,0.05)',
                height:49,
                marginLeft:30,
                marginRight:30,
                marginTop:5,
                borderTopLeftRadius: 5,
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
                fontSize:14
            }}
            keyboardType={value3}                
            placeholder={'Type here...'}
            value={value1}
            onChangeText={value2}
            textContentType={value4}
        />
    </SafeAreaView>
  );
}