import React, {useState} from "react";
import {Text, View, ScrollView,TouchableOpacity,FlatList} from 'react-native';
import styles from '../../../styles';
import BottomNavigator from "../../assets/components/bottomBar";
import TopNavigator from "../../assets/components/topBar";
import PadIcon from "../../assets/components/padIcons";

const WelcomeBack = ({navigation}) => {

    const data=[
        {Name: 'PAD 1',size: 150,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#958EE5',onPress:''},
        {Name: 'PAD 2',size: 100,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#F9FC73',onPress:''},
        {Name: 'PAD 3',size: 75,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#FC73B5',onPress:''},
        {Name: 'PAD 4',size:150,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#958EE5',onPress:''},
        {Name: 'PAD 5',size: 100,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#F9FC73',onPress:''},
        {Name: '+',size: 75,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#FC73B5',onPress:'Create PaD'},
        {Name: 'PAD 7',size: 150,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#958EE5',onPress:''},
        {Name: 'PAD 8',size:100,TL:'20%',TR:'20%',BL:'20%',BR:'0%',color:'#F9FC73',onPress:''},
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

export default WelcomeBack;