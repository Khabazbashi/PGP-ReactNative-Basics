import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Row from './components/Row';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Text style={styles.value}>
         Current value here
        </Text>
        <Row>
          <Button title="C"></Button>
          <Button title="+/-"></Button>
          <Button title="%"></Button>
          <Button title="÷"></Button>
        </Row>
        <Row>
          <Button title="7"></Button>
          <Button title="8"></Button>
          <Button title="9"></Button>
          <Button title="x"></Button>
        </Row>
        <Row>
          <Button title="4"></Button>
          <Button title="5"></Button>
          <Button title="6"></Button>
          <Button title="-"></Button>
        </Row>
        <Row>
          <Button title="1"></Button>
          <Button title="2"></Button>
          <Button title="3"></Button>
          <Button title="+"></Button>
        </Row>
        <Row>
          <Button title="0"></Button>
          <Button title=","></Button>
          <Button title="="></Button>
        </Row>
      </SafeAreaView>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'skyblue',
  },
  value: {
    color: "#FF5733",
    fontSize: 42,
    textAlign: "right",
    marginBottom: 40,
  },
});
