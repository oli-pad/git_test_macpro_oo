import React, {useState} from "react";
import { ImageBackground, Text, View, Image,Button, TouchableOpacity} from 'react-native';
import styles from '../../../styles';
import RoundedBox from "../../assets/components/roundedRectangle";

const HomePage = ({navigation}) => {

    return(
        <View style={styles.end_container}>
            <ImageBackground style={styles.backgroundImage}
                    source={require('../../assets/images/PAD_MVP_IMAGES/Background_image.png')} >
                <View style={{backgroundColor:'rgba(0,0,0,0.1)',height:'100%',width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                    <View style={{width: 139,
                        height: 139,
                        borderRadius: 139 / 2,
                        backgroundColor: '#FFFFFF',
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:0,
                        marginBottom:65}}>
                        <TouchableOpacity 
                            style={{alignItems:'center'}}
                            onPress={() => {
                            navigation.navigate("Login Page")}}>
                            <Image style={styles.frontPageLogo}
                                source={require('../../assets/images/PAD_MVP_IMAGES/Logo.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{bottom:100}}>
                        <Text style={styles.frontPageText}>Press to</Text>
                        <Text style={[styles.frontPageText,{marginBottom:10}]}>Re-connect</Text>
                    </View>
                    <RoundedBox text={'Create an account'} left={78} right={78} onPress={() => {
                        navigation.navigate("Safety First")}}/>
                </View>
            </ImageBackground>
        </View>
    );
}

export default HomePage;