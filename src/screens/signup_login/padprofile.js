import React, {useState} from "react";
import { ScrollView, Text, View, Image,Button} from 'react-native';
import styles from '../../../styles';
import RoundedTextInput from "../../assets/components/roundedTextInput";
import RoundedTouchable from "../../assets/components/roundedTouchable";
import AddPhoto from "../../assets/components/addPhoto";
import RoundedBox from "../../assets/components/roundedRectangle";
import ProgressBar from "../../assets/components/progressBar";

const PADProfile = ({navigation}) => {
    const [display,setdisplay] = useState(false);
    const [interest1,setinterest1] = useState(false);
    const [interest2,setinterest2] = useState(false);
    const [interest3,setinterest3] = useState(false);

    return(
        <View style={styles.start_container}>
            <Text style={styles.signUpHeader}>Your PaD Profile</Text>
            <Text style={{textAlign:"center",fontSize:18,paddingTop:30,paddingBottom:5}}>Add a photo</Text>
            <AddPhoto onPress={''} />
            <ScrollView>
            <Text style={styles.signUpSmallHeader}>Display Name</Text>
            <RoundedTextInput value1={display} value2={setdisplay} value3={'default'} value4={'none'}/>
            <Text style={styles.signUpSmallHeader}>Which best describes you? </Text>
            <RoundedTouchable text={'Male...'}/>
            <RoundedTouchable text={'Female...'}/>
            <RoundedTouchable text={'Other...'}/>
            <Text style={styles.signUpSmallHeader}>Let us know three of your interests</Text>
            <RoundedTextInput value1={interest1} value2={setinterest1} value3={'default'} value4={'none'}/>
            <RoundedTextInput value1={interest2} value2={setinterest2} value3={'default'} value4={'none'}/>
            <RoundedTextInput value1={interest3} value2={setinterest3} value3={'default'} value4={'none'}/>
            <View style={{margin:100}}/>
            </ScrollView>
            <View style={{position:'absolute',bottom:20}}>
            <RoundedBox text='Continue' left={30} right={30} onPress={()=> {navigation.navigate("Welcome Back")}}/>
            <View style={{margin:10}}/>
            <ProgressBar one='#52FFD5' two='#52FFD5' three='#52FFD5' twoBorder='#52FFD5' threeBorder='#52FFD5' fourBorder='#52FFD5'/>
            </View>
        </View>
    );
}

export default PADProfile;