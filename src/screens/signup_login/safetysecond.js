import React, {useState} from "react";
import { ImageBackground, Text, View, Image,Button,Alert} from 'react-native';
import styles from '../../../styles';
import RoundedTextInput from "../../assets/components/roundedTextInput";
import RoundedBox from "../../assets/components/roundedRectangle";
import ProgressBar from "../../assets/components/progressBar";
const SafetySecond = ({navigation}) => {
    const [email,setemail] = useState(false);
    const [pw,setpw] = useState(false);
    const [confirmpw,setconfirmpw] = useState(false);

    const onRegisterPress = () => {
    
    };
    
    return(
        <View style={styles.start_container}>
            <Text style={styles.signUpHeader}>Safety Second</Text>
            <Text style={styles.signUpSmallHeader}>What is your email address?</Text>
            <RoundedTextInput value1={email} value2={setemail} value3={'email-address'}/>
            <Text style={styles.signUpSmallHeader}>Create a password</Text>
            <RoundedTextInput value1={pw} value2={setpw} value3={'email-address'}/>
            <Text style={styles.signUpSmallHeader}>Confirm Password</Text>
            <RoundedTextInput value1={confirmpw} value2={setconfirmpw} value3={'email-address'}/>
            <View style={{position:'absolute',bottom:20}}>
            <RoundedBox text='Continue' left={30} right={30} onPress={()=> {
                onRegisterPress()
            }}/>
            <View style={{margin:10}}/>
            <ProgressBar one='#52FFD5' two='#FFFFFF' three='#FFFFFF' twoBorder='#52FFD5' threeBorder='rgba(82, 255, 213, 0.28)' fourBorder='rgba(82, 255, 213, 0.28)'/>
            </View>
        </View>
    );
};

export default SafetySecond;