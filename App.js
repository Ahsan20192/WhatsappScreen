import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Header from './Header';
import Navigation from './Navigation';



export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor='green' barStyle='light-content' />
        <Header />
        <Navigation />

        <View Style={{ flex: 1, backgroundColor: 'white' }}>
         
        </View>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
