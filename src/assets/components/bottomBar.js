import React from "react";
import { Text,View,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const BottomNavigator = () => {
    const navigation = useNavigation()
    return (
        <View style={{
            flex:1,
            width:'100%',
            height:'100%',
            justifyContent:'flex-end',
            backgroundColor:'#FFFFFF',
            borderTopLeftRadius:40}}>
            <View style={{width:'100%',
                height:80,
                justifyContent:'space-between',
                backgroundColor:'#313131',
                flexDirection:'row',
                paddingHorizontal: 25,
                paddingVertical: 5,
                justifyContent:'center',
                borderTopLeftRadius:40,
                borderTopRightRadius:40
                }}>
                <View style={{width: 55,
                    height: 55,
                    borderRadius: 55 / 2,
                    backgroundColor: '#FFFFFF',
                    alignContent:'center',
                    justifyContent:'center'}}>
                    <TouchableOpacity
                        style={{alignItems:'center'}}
                        onPress={()=>{navigation.navigate("Welcome Back")}}>
                        <Image
                        source={require('../../assets/images/PAD_MVP_IMAGES/Logo_mono.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default BottomNavigator;