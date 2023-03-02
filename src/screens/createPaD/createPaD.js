import React, {useState} from "react";
import {Text, View, ScrollView, TouchableOpacity,Image} from 'react-native';
import styles from '../../../styles';
import RoundedTextInput from "../../assets/components/roundedTextInput";
import RoundedBox from "../../assets/components/roundedRectangle";
import BottomNavigator from "../../assets/components/bottomBar";
import AddPhoto from "../../assets/components/addPhoto";
import TopNavigator from "../../assets/components/topBar";

const CreatePaD = ({navigation}) => {
    const [padname,setpadname] = useState(false);
    const [desc,setdesc] = useState(false);
    const [pad3words,setpad3words] = useState(false);

    return(
        <View style={styles.start_container}>
            <TopNavigator/>
            <Text style={{fontSize:24,textAlign:'center',bottom:50}}>Create a PAD</Text>
            <AddPhoto onPress={''} />
            <ScrollView>
            <Text style={styles.signUpSmallHeader}>Name</Text>
            <RoundedTextInput value1={padname} value2={setpadname} value3={'default'}/>
            <Text style={styles.signUpSmallHeader}>Description</Text>
            <RoundedTextInput value1={desc} value2={setdesc} value3={'default'}/>
            <Text style={styles.signUpSmallHeader}>Your PAD 3 words</Text>
            <RoundedTextInput value1={pad3words} value2={setpad3words} value3={'default'}/>
            <Text style={styles.signUpSmallHeader}>My PAD contacts</Text>
            <ScrollView
                horizontal
                style={{paddingLeft:25}}>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
                <View style={{height:55,width:55,backgroundColor:'#D9D9D9',margin:5,
                borderTopLeftRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}/>
            </ScrollView>
            <Text style={styles.signUpSmallHeader}>Add from your phone book</Text>
            <TouchableOpacity style={{paddingLeft:30}}>
                <Image
                    source={require('../../assets/images/PAD_MVP_IMAGES/Create_button.png')}
                />
            </TouchableOpacity>
            <RoundedBox text={'Create'} left={50} right={50} />
            <View style={{margin:100}}/>
            </ScrollView>
            <BottomNavigator/>
        </View>
    );
}

export default CreatePaD;