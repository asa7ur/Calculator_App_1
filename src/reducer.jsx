import { ACTIONS } from "./Actions";

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.ADD_DIGIT:
            return{
                ...state,
                currentOperand: `${state.currentOperand || ''}${payload.digit}`,
            }
    }
}

export default reducer