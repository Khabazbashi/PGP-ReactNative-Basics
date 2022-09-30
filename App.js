import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Row from './components/Row';


export default function App() {

  const [state, setState] = useState(initialState)

  const HandleTap = (type, value) => {
    setState(calculator(type, value, state));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Text style={styles.value}>
          Current value
        </Text>
        <Row>
          <Button title="C" onPress={() => HandleTap("clear")}></Button>
          <Button title="+/-" onPress={() => HandleTap("invert")}></Button>
          <Button title="%" onPress={() => HandleTap("operator", "/")}></Button>
          <Button title="÷" onPress={() => HandleTap("operator", "/")}></Button>
        </Row>
        <Row>
          <Button title="7" onPress={() => HandleTap("number", 7)}></Button>
          <Button title="8" onPress={() => HandleTap("number", 8)}></Button>
          <Button title="9" onPress={() => HandleTap("number", 9)}></Button>
          <Button title="x" onPress={() => HandleTap("operator", "*")}></Button>
        </Row>
        <Row>
          <Button title="4" onPress={() => HandleTap("number", 4)}></Button>
          <Button title="5" onPress={() => HandleTap("number", 5)}></Button>
          <Button title="6" onPress={() => HandleTap("number", 6)}></Button>
          <Button title="-" onPress={() => HandleTap("operator", "-")}></Button>
        </Row>
        <Row>
          <Button title="1" onPress={() => HandleTap("number", 1)}></Button>
          <Button title="2" onPress={() => HandleTap("number", 2)}></Button>
          <Button title="3" onPress={() => HandleTap("number", 3)}></Button>
          <Button title="+" onPress={() => HandleTap("operator", "+")}></Button>
        </Row>
        <Row>
          <Button title="0" onPress={() => HandleTap("number", 0)}></Button>
          <Button title="," onPress={() => HandleTap("separator", ".")}></Button>
          <Button title="=" onPress={() => HandleTap("operator", "=")}></Button>
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
