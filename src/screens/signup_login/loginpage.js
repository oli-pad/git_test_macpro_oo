import React, {useState} from "react";
import {Text, View} from 'react-native';
import styles from "../../../styles";
import RoundedTextInput from "../../assets/components/roundedTextInput";
import RoundedBox from "../../assets/components/roundedRectangle";

const LoginPage = ({navigation}) => {
    const [email,setemail] = useState(false);
    const [pw,setpw] =useState(false);
    const auth = getAuth(app)

    const onLoginPress = () => {
    }

    return(
        <View style={styles.start_container}>
            <Text style={styles.signUpHeader}>Log In</Text>
            <Text style={styles.signUpSmallHeader}>Phone Number</Text>
            <RoundedTextInput value1={email} value2={setemail} value3={'phone-pad'}/>
            <Text style={styles.signUpSmallHeader}>Password</Text>
            <RoundedTextInput value1={pw} value2={setpw} value3={'default'}/>
            <View style={{width:'100%',position:'absolute',bottom:20}}>
            <RoundedBox text='Continue' left={30} right={30} onPress={()=> {
                onLoginPress()
            }}/>
            <View style={{margin:10}}/>
            </View>
        </View>
    );
}


export default LoginPage;