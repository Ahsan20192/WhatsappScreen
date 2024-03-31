import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Feather,Fontisto,MaterialCommunityIcons} from 'react-native-vector-icons'



export default  Header=()=> {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style ={styles.headerContainer}>Whatsapp </Text>
          <View style={styles.iconContainer}>
              <Feather  name='camera' size={20} color ='black'  style={styles.icon} /> 
              <Fontisto  name='search' size={20} color ='black'  style={styles.icon} />
              <MaterialCommunityIcons name='dots-vertical' size={21} color='black' style={styles.icon}/>


          </View>
        </View>
    </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
     paddingTop:80,
     paddingBottom:8,
  },
  headerContainer:
  {
         fontSize:20,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between'

  },
  headerText:
  {
    fontSize:20,
    color:'white',
    fontWeight:'500'

  },
   iconContainer:
   {
      flexDirection:'row',
      alignItems:'center'
   },
   icon:
   {
     marginLeft:20
   }
});
