export const initialState = {
    currentValue: "0",
    previousValue: null,
    operator: null,
    startFresh: false
}

function handleNumber(value, state) {
    if (state.startFresh) {
        return {
            ...state,
            currentValue: value,
            startFresh: false
        };
    }

    if(state.currentValue.length >= 10)
    {
        return {
            ...state,
        };
    }

    return {
        ...state,
        currentValue: `${state.currentValue}${value}`
    };
}

function handleOperator(value, state) {
    if (state.previousValue === null) {
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
        return {
            ...initialState,
            currentValue: result,
            startFresh: true,
        }
    }

    return {
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
        case "percentage":
                return {
                    ...state,
                    currentValue: `${state.currentValue/100}`
                }
        default:
            return state;
    }
};

export default calculator; 
