import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';
import react ,{useState,useEffect} from 'react'
import DATA from './chatData'
//import {MaterialCommunityIcons} from 'react-native-vertor-icons'
export default  Chats=()=> {
  const [chatData,setChatData] =useState(DATA);

  return (
    
      <View style={styles.container}>
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id.toString()} // Capitalized KeyExtractor
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {/* Render text data */}
              {/* Conditionally render image */}
              {item.photos && (
                <Image
                source={require(item.photos.imageFilenames[0])} // Assuming local images
                  style={styles.profileImage}
                />
              )}
            </View>
          )}
        />
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
