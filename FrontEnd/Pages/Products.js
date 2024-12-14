/* Libraries */
import { View,Image,StyleSheet,Dimensions,ScrollView,SafeAreaView } from "react-native";
import { useEffect,useState} from "react";

const screenHeight = (Dimensions.get('window').height)/3;
const screenWidth = (Dimensions.get('window').width)/2;
/* main function */
export default function Products(){
    /* variables and functions */
    
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
    },[]);
    
    /* return function */
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                {data.map((info)=>(
                    <View key={info.id}><Image source={{uri:info.image}} style={styles.img}></Image></View>
                ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    img: {
      width: screenWidth,
      height: screenHeight,
      marginBottom: 5,
      margin: 15,
    },
    title: {
      marginTop: '30%',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 30,
      alignItems: 'center',
      alignContent: 'center',
    },
    textInput: {
      height: '10%',
      width: '60%',
      backgroundColor: '#FFFFFF',
      alignSelf:'center',
      marginBottom: '5%',
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 50,
      paddingStart: 20,
    },
    buttons:{
      width: '50%',
      borderRadius: 50,
    },
    spacing: {
      marginTop: '5%',
    },
    textList:{
      paddingTop: '20%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      height: '70%',
    },
    container:{
      height:'100%',
      width: '100%',
    },
    item: {
      paddingBottom: 1,
    }
  });
  