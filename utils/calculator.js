export const initialState = {
    currentValue: "0",
    previousValue: null,
    operator: null,
    startFresh: false
}

function calculator(type, value, state) {
    switch (type) {
        case "number":
            return handleNumber(value, state);

        case "operator":
            return handleOperator(value, state)

        case "clear":
                return initialState

        default:
            console.log("def")
            return state;
    }
};

export default calculator; 
