import { Dimensions, TouchableOpacity, Text, StyleSheet, View } from "react-native"



const Button = ({ onPress, title, theme, size }) => {

    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
   
    if(theme === "accent"){
        buttonStyles.push(styles.accentButton)
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
        backgroundColor: "#2f4056",
        width: buttonWidth,
        height: buttonWidth,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius: 150,
    },
    doubleButton: {
        width: buttonWidth * 2.3,
        paddingRight: 75,
    },
    text: {
        color: "#8ac8da",
        fontSize: 25,
        fontFamily: "Menlo"
    },
    accentButton:{
        backgroundColor: "#8ac8da",
        opacity: 0.5,
    },
    accentText:{
        color: "#2f4056",
    }


});

export default Button;