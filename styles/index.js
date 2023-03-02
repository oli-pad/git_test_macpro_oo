import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    end_container: {
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
   start_container:{
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'flex-start'
    },
    backgroundImage:{
        alignItems:'center',
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    modalView: {
        height:"65%",
        width:"100%",
        position:"absolute",
        bottom:0,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 5
      },
    frontPageLogo:{
        width:80,
        height:80,
    },
    frontPageText: {
        fontSize:35,
        textAlign:"center"
    },
    signUpHeader:{
        fontSize:24,
        paddingTop:75,
        paddingLeft:30,
        paddingBottom:40
    },
    signUpSmallHeader:{
        fontSize:18,
        paddingTop:30,
        paddingLeft:30,
        paddingBottom:5
    },
    stdText:{
        fontSize:12,
        paddingLeft:30
    }
});

export default styles;