import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image}
      />
      <Text style={styles.textimage}>Fasta Mb Personal</Text>
      <Text style={styles.textimage}>Personal Blanace: R$50</Text>

      <View style={styles.imput1}>
        <Text style={styles.textbody}>Seller Mode</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.body}>
          <Text style={styles.textbody}>Mi Fiverr</Text>
          <Text style={styles.box}>Get Inspired</Text>
          <Text style={styles.box}>Saved Gigs</Text>
          <Text style={styles.box}>My Interests</Text>

          <Text style={styles.textbody}>Buying</Text>
          <Text style={styles.box}>Post a Request</Text>
          <Text style={styles.box}>Manage Request</Text>

          <Text style={styles.textbody}>General</Text>
          <Text style={styles.box}>Setting</Text>
          <Text style={styles.box}>Show online status</Text>
          <Text style={styles.box}>Payments</Text>
          <Text style={styles.box}>Invite firends</Text>
          <Text style={styles.box}>Become a seller</Text>
          <Text style={styles.box}>Support</Text>
        </View>

        <View style={styles.footer}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#00ff7f",
    alignItems: "center",
    padding: 60,
  },

  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  textimage: {
    fontSize: 15,
    marginTop: 10,
  },

  imput1: {
    marginTop: 12,
    width: 330,
    height: 40,
    textAlign: "left",
    borderRadius: 7,
    backgroundColor: "#ffff",
    shadowOpacity: 0.8,
 
  },

  box: {
    backgroundColor: "#dcdcdc", 
    paddingTop: 8,
    fontSize: 15,
    paddingLeft: 20,
    
  },

  body: {
    marginTop: 0,
    width: 330,
    height: 480,
    textAlign: "left",
    borderRadius: 7,
    backgroundColor: "#ffff",
    borderStyle: 'dashed',
    
  },

  textbody: {
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },

  footer: {
    marginHorizontal: 0,
    height: 45,
    backgroundColor: "#000000",
    marginTop: 0,
  },
});
