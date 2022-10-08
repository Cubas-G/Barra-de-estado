import  React, {} from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
      <View style={styles.body}>
        <Text style={styles.textbody}>Mi Fiver</Text>

      </View>
    );
   
  }

  const styles = StyleSheet.create({

    body: {
        backgroundColor: '#9acd32',
        width: '100',
        height: '100',
    },

    textbody: {
        fontWeight: "bold",
        fontSize: 30,
    }
    


  });