import React, {useState} from "react";
import {Text, View, ScrollView,TouchableOpacity,FlatList} from 'react-native';
import styles from '../../../styles';
import BottomNavigator from "../../assets/components/bottomBar";
import TopNavigator from "../../assets/components/topBar";
import PadIcon from "../../assets/components/padIcons";

const GroupPage = ({navigation}) => {

    const widgetdata=[
        {Name: 'PAD 1',size: 150,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#958EE5',onPress:''},
        {Name: 'PAD 2',size: 100,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#F9FC73',onPress:''},
        {Name: 'PAD 3',size: 75,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#FC73B5',onPress:''},
        {Name: 'PAD 8',size:100,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#F9FC73',onPress:''},
    ]

    const usersdata=[
        {Name: '',size: 42,TL:'10%',TR:'0%',BL:'10%',BR:'10%',color:'#D9D9D9',onPress:''},
        {Name: '',size: 42,TL:'10%',TR:'0%',BL:'10%',BR:'10%',color:'#D9D9D9',onPress:''},
        {Name: '',size: 42,TL:'10%',TR:'0%',BL:'10%',BR:'10%',color:'#D9D9D9',onPress:''},
        {Name: '',size: 42,TL:'10%',TR:'0%',BL:'10%',BR:'10%',color:'#D9D9D9',onPress:''},
    ]

    return(
        <View style={styles.start_container}>
            <TopNavigator/>
            <View style={{flexDirection:'row',bottom:50}}>
            <View style={{margin:10}}/>
            <PadIcon size={75}
                    TL='0%' TR='20%'
                    BL='20%' BR='20%'
                    color='#2E9F5B' onPress={()=>{}}
                    text='New PaD'/>
            <View style={{margin:10}}/>
            <View>
            <Text style={{fontSize:15,left:'5%'}}>PAD Members</Text>
            <FlatList
                horizontal
                data={usersdata}
                renderItem={({item}) => <PadIcon size={item.size}
                    TL={item.TL} TR={item.TR}
                    BL={item.BL} BR={item.BR}
                    color={item.color} onPress={()=>{navigation.navigate(item.onPress)}}
                    text={item.Name}>
                </PadIcon>}
            />
            </View>
            </View>
            <Text style={{fontSize:20,left:'5%'}}>New PAD</Text>
            <ScrollView contentContainerStyle={{ flexGrow: 1,justifyContent: 'center',alignItems:'center' }}>
              <View style={{margin:30}}/>
              <FlatList
                data={widgetdata}
                renderItem={({item}) => <PadIcon size={item.size}
                    TL={item.TL} TR={item.TR}
                    BL={item.BL} BR={item.BR}
                    color={item.color} onPress={()=>{navigation.navigate(item.onPress)}}
                    text={item.Name}>
                </PadIcon>}
                numColumns={2}
              />
            <View style={{margin:100}}/>
            </ScrollView>
            <BottomNavigator/>
        </View>
    );
}

export default GroupPage;