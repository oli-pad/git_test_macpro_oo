import React, {useState} from "react";
import {Text, View, ScrollView,TouchableOpacity,FlatList} from 'react-native';
import styles from '../../../styles';
import BottomNavigator from "../../assets/components/bottomBar";
import TopNavigator from "../../assets/components/topBar";
import PadIcon from "../../assets/components/padIcons";

const UserPage = ({navigation}) => {

    const data=[
        {Name: 'PAD 1',size: 150,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#958EE5',onPress:''},
        {Name: 'PAD 2',size: 100,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#F9FC73',onPress:''},
        {Name: 'PAD 8',size:100,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#73F4FC',onPress:''},
    ]

    return(
        <View style={styles.start_container}>
            <TopNavigator/>
            <Text style={{fontSize:24,textAlign:'center',bottom:50}}>Welcome Back</Text>
            <Text style={{fontSize:20,left:'5%'}}>Your PADs</Text>
            <ScrollView contentContainerStyle={{ flexGrow: 1,justifyContent: 'center',alignItems:'center' }}>
              <View style={{margin:30}}/>
              <FlatList
                data={data}
                renderItem={({item}) => <PadIcon size={item.size}
                    TL={item.TL} TR={item.TR}
                    BL={item.BL} BR={item.BR}
                    color={item.color} onPress={()=>{navigation.navigate(item.onPress)}}
                    text={''}>
                </PadIcon>}
                numColumns={2}
              />
            <View style={{margin:100}}/>
            </ScrollView>
            <View style={{flex:1}}>
            <Text llipsizeMode='tail' numberOfLines={3} style={{marginLeft:50,marginRight:50,bottom:100}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali</Text>
            </View>
            <BottomNavigator/>
        </View>
    );
}

export default UserPage;