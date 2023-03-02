import React, {useState} from "react";
import { ImageBackground, Text, View, Image,Button,Modal} from 'react-native';
import styles from '../../../styles';
import RoundedTextInput from "../../assets/components/roundedTextInput";
import RoundedBox from "../../assets/components/roundedRectangle";
import ProgressBar from "../../assets/components/progressBar";


const PersonalStuff = ({navigation}) => {
    const [display,setdisplay] = useState(false);
    const [name,setname] = useState(false);
    const [famname,setfamname] = useState(false);
    const [DOB,setDOB] = useState(false);
    const [loc,setloc] = useState(false);


    return(
        <View style={styles.start_container}>
            <Text style={styles.signUpHeader}>Personal Stuff</Text>
            <Text style={styles.signUpSmallHeader}>First Name</Text>
            <RoundedTextInput value1={name} value2={setname} value3={'default'} value4={'givenName'}/>
            <Text style={styles.signUpSmallHeader}>Last Name</Text>
            <RoundedTextInput value1={famname} value2={setfamname} value3={'default'} value4={'familyName'}/>
            <Text style={styles.signUpSmallHeader}>Date of Birth</Text>
            <RoundedTextInput value1={DOB} value2={setDOB} value3={'default'} value4={'none'}/>
            <Text style={styles.signUpSmallHeader}>Where do you live?</Text>
            <RoundedTextInput value1={loc} value2={setloc} value3={'default'} value4={'location'}/>
            <Modal
                animationType = {"slide"}
                transparent = {true}
                visible={display}
                onRequestClose={() => {
                     Alert.alert('Modal has now been closed.');
                }}>
                <View style={styles.modalView}>
                    <Text style={styles.signUpSmallHeader}>Confirm your date of birth</Text>
                    <Text style={styles.stdText}>Please confirm you are X years old,</Text>
                    <Text style={styles.stdText}>born on DD/MM/YYYY</Text>
                    <RoundedBox text={'Confirm'} left={35} right={35} onPress={() => {
                        setdisplay(false);
                        navigation.navigate("PAD Profile");
                        }}/>
                </View>
            </Modal>
            <View style={{position:'absolute',bottom:20}}>
            <RoundedBox text='Continue' left={30} right={30} onPress={()=> {
                setdisplay(true);
            }}/>
            <View style={{margin:10}}/>
            <ProgressBar one='#52FFD5' two='#52FFD5' three='#FFFFFF' twoBorder='#52FFD5' threeBorder='#52FFD5' fourBorder='rgba(82, 255, 213, 0.28)'/>
            </View>
        </View>
    );
}

export default PersonalStuff;