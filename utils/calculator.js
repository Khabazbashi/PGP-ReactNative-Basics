export const initialState = {
    currentValue: "0",
    previousValue: null,
    operator: null,
    startFresh: false
}

function handleNumber(value, state) {
    if (state.startFresh) {
        console.log("2")
        return {
            ...state,
            currentValue: value,
            startFresh: false
        };
    }
    console.log("1")
    return {
        ...state,
        currentValue: `${state.currentValue}${value}`
    };
}

function handleOperator(value, state) {

    if (state.previousValue === null) {
        console.log("3")
        return {
            ...state,
            previousValue: state.currentValue,
            operator: value,
            startFresh: true,
        };
    }

    let result;
    const current = parseFloat(state.currentValue);
    const previous = parseFloat(state.previousValue);
    switch (state.operator) {
        case "+":
            result = `${previous + current}`;
            break;
        case "-":
            result = `${previous - current}`;
            break;
        case "*":
            result = `${previous * current}`;
            break;
        case "/":
            result = `${previous / current}`;
            break;
     }


    if (value === "=") {
        console.log("4")
        console.log(state)
        return {
            ...initialState,
            currentValue: result,
            startFresh: true,
        }
    }

    console.log("5")
    return {
        ...state,
        currentValue: result,
        previousValue: result,
        startFresh: true,
        operator: value,
    };
};

function calculator(type, value, state) {
    switch (type) {
        case "number":
            return handleNumber(value, state);

        case "operator":
            return handleOperator(value, state)

        case "clear":
                return initialState

        case "invert":
            return {
                ...state,
                currentValue: state.currentValue * -1,
            }
        
        case "comma":
            return {
                ...state,
                currentValue: `${state.currentValue + value}`
            }
        
        default:
            console.log("def")
            return state;
    }
};

export default calculator; 
