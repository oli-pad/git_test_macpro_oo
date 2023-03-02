import React from "react";
import { Text,View,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const TopNavigator = () => {
    const navigation = useNavigation()
    return (
        <View style={{width:'100%',
            height:200,
            justifyContent:'space-between',
            backgroundColor:'#313131',
            flexDirection:'row',
            justifyContent:'center',
            }}>
            <TouchableOpacity style={{position:'absolute',bottom:0,left:0}} onPress={()=>{navigation.navigate("User Page")}}>
            <Image
                style={{
                    bottom:85,
                    left:30,
                    position:'absolute'
                }}
                source={require('../../assets/images/PAD_MVP_IMAGES/Profile_image.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity style={{bottom:110,right:30,position:'absolute'}}>
                <View style={{height:5,width:40,backgroundColor:'#FFFFFF',}}/>
                <View style={{margin:5}}/>
                <View style={{height:5,width:40,backgroundColor:'#FFFFFF',}}/>
                <View style={{margin:5}}/>
                <View style={{height:5,width:25,backgroundColor:'#FFFFFF',}}/>
            </TouchableOpacity>
            <View style={{width:'100%',
                height:80,
                bottom:0,
                position:'absolute',
                backgroundColor:'#FFFFFF',
                borderTopLeftRadius:40,
                borderTopRightRadius:40
            }}/>
        </View>
    );
};

export default TopNavigator;