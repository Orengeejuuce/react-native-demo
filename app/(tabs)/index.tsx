import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  /* Initialize count and setCount using useState */

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {/*count*/}</Text>
      <View style={styles.buttonContainer}>

        {/* example for increase count button */}
        {/* <Button title="Increase" onPress={() => setCount(count + 1)} />  */} 
        {/* write code for decrease and reset count button here */}
            
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  countText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
});