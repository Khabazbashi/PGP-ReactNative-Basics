import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';
import calculator, { initialState } from './utils/calculator';


export default function App() {

  const [state, setState] = useState(initialState)

  const HandleTap = (type, value) => {
    setState(calculator(type, value, state));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View  style={styles.window}>
        <Text style={styles.windowText}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>
        </View>
        <View style={styles.buttonContainer}>
        <Row>
          <Button title="AC" onPress={() => HandleTap("clear")} theme="accent"></Button>
          <Button title="+/-" onPress={() => HandleTap("invert")} theme="accent"></Button>
          <Button title="%" onPress={() => HandleTap("percentage")} theme="accent"></Button>
          <Button title="÷" onPress={() => HandleTap("operator", "/")} theme="accent"></Button>
        </Row>
        <Row>
          <Button title="7" onPress={() => HandleTap("number", 7)}></Button>
          <Button title="8" onPress={() => HandleTap("number", 8)}></Button>
          <Button title="9" onPress={() => HandleTap("number", 9)}></Button>
          <Button title="x" onPress={() => HandleTap("operator", "*")} theme="accent"></Button>
        </Row>
        <Row>
          <Button title="4" onPress={() => HandleTap("number", 4)}></Button>
          <Button title="5" onPress={() => HandleTap("number", 5)}></Button>
          <Button title="6" onPress={() => HandleTap("number", 6)}></Button>
          <Button title="-" onPress={() => HandleTap("operator", "-")} theme="accent"></Button>
        </Row>
        <Row>
          <Button title="1" onPress={() => HandleTap("number", 1)}></Button>
          <Button title="2" onPress={() => HandleTap("number", 2)}></Button>
          <Button title="3" onPress={() => HandleTap("number", 3)}></Button>
          <Button title="+" onPress={() => HandleTap("operator", "+")} theme="accent"></Button>
        </Row>
        <Row>
          <Button title="0" onPress={() => HandleTap("number", 0)} ></Button>
          <Button title="," onPress={() => HandleTap("comma", ".")} size="double" ></Button>
          <Button title="=" onPress={() => HandleTap("operator", "=")} theme="accent"></Button>
        </Row>
        </View>
      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#2f4056',
    paddingLeft: 10,
    paddingRight: 10,
  },
  window: {
    backgroundColor: '#2f4056',
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 40,
  },
  windowText: {
    color: "#8ac8da",
    fontSize: 42,
    textAlign: "right",
    paddingRight: 25,
  },
  buttonContainer: {
    justifyContent: "center",
    fontSize: 30,
  }
});
