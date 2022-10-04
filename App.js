import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';
import calculator, { initialState } from './utils/calculator';


export default function App() {

  const [state, setState] = useState(initialState)
  const windowText = [styles.windowText];

  const HandleTap = (type, value) => {
    setState(calculator(type, value, state));
  };

  const displayResult = (currentValue) => {
    if(currentValue.length > 7)
    {
      windowText.push(styles.windowTextReduced)
    }
    if(currentValue.length > 10)
    {
      return parseFloat(currentValue/(10**(currentValue.length-1))).toLocaleString() + 
      "e" + (currentValue.length-1) 
    }
   return parseFloat(currentValue).toLocaleString() 
  };
  
  //TODO division by 0
  //TODO pressing equals multiple times

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={styles.window}>
        <Text style={windowText}>
          { displayResult(state.currentValue) }
        </Text>
        </View>
        <View style={styles.buttonContainer}>
        <Row>
          <Button title="C" onPress={() => HandleTap("clear")} theme="accent"></Button>
          <Button title="±" onPress={() => HandleTap("invert")} theme="accent"></Button>
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
          <Button title="0" onPress={() => HandleTap("number", 0)} size="double"></Button>
          <Button title="," onPress={() => HandleTap("comma", ".")}  ></Button>
          <Button title="=" onPress={() => HandleTap("operator", "=")} theme="equal" ></Button>
        </Row>
        </View>
      </SafeAreaView>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#17181a',
  },
  window: {
    flex: 1,
    width: Dimensions.get("window").width * 0.87,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginTop: 100,
  },
  windowText: {
    color: "#f7f8fa",
    fontSize: 80,
    textAlign: "right",
  },
  windowTextReduced:{
    fontSize: 50,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "center",
    fontSize: 30,
    marginVertical: 20,
  }
});
