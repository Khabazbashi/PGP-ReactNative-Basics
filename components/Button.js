import { Dimensions, TouchableOpacity, Text, StyleSheet, View } from "react-native"



const Button = ({ onPress, title, theme, size }) => {

    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
   
    if(theme === "accent"){
        buttonStyles.push(styles.accentButton)
        textStyles.push(styles.accentText)
    }
    if(theme === "equal"){
        buttonStyles.push(styles.equalButton)
        textStyles.push(styles.accentText)
    }
    if(size === "double"){
        buttonStyles.push(styles.doubleButton)
    }
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
};

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 6;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#232428",
        width: buttonWidth,
        height: buttonWidth,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius: 25,
    },
    doubleButton: {
        width: buttonWidth * 2.3,
        alignSelf: "center",
    },
    text: {
        color: "#f7f8fa",
        fontSize: 25,
        fontFamily: "Menlo"
    },
    accentButton:{
        backgroundColor: "#ff9501",
    },
    equalButton:{
        backgroundColor: "#2dca73",
    },
    accentText:{
        color: "#f7f8fa",
    }


});

export default Button;