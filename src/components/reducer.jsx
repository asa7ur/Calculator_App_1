import { ACTIONS } from './Actions'

const reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.ADD_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					currentOperand: payload.digit,
					overwrite: false,
				}
			}
			if (payload.digit === '0' && state.currentOperand === '0') {
				return state
			}
			if (payload.digit === '.' && state.currentOperand.includes('.')) {
				return state
			}
			if (state.currentOperand === '0' && payload.digit !== '.') {
				return {
					...state,
					currentOperand: `${payload.digit}`,
				}
			}
			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${payload.digit}`,
			}

		case ACTIONS.CHOOSE_OPERATION:
			if (state.previousOperand == null || state.overwrite) {
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
				}
			}

			if (state.currentOperand == null) {
				return {
					...state,
					operation: payload.operation,
				}
			}

			return {
				...state,
				previousOperand: evaluate(state),
				operation: payload.operation,
				currentOperand: null,
			}

		case ACTIONS.CLEAR:
			return {
				currentOperand: '0',
				previousOperand: null,
			}

		case ACTIONS.DELETE_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					currentOperand: '0',
					overwrite: false,
				}
			}
			if (state.currentOperand === '0' || state.currentOperand == null) {
				return state
			}
			if (state.currentOperand.length === 1) {
				return {
					...state,
					currentOperand: '0',
				}
			}
			return {
				...state,
				currentOperand: state.currentOperand.slice(0, -1),
			}

		case ACTIONS.EVALUATE:
			if (
				state.operation == null ||
				state.currentOperand == null ||
				state.previousOperand == null
			) {
				return state
			}

			return {
				...state,
				overwrite: true,
				previousOperand: null,
				operation: null,
				currentOperand: evaluate(state),
			}
	}
}

const evaluate = ({ currentOperand, previousOperand, operation }) => {
	const prev = parseFloat(previousOperand)
	const current = parseFloat(currentOperand)
	if (isNaN(prev) || isNaN(current)) return ''
	let computation = ''
	switch (operation) {
		case '+':
			computation = prev + current
			break
		case '-':
			computation = prev - current
			break
		case '÷':
			computation = prev / current
			break
		case '×':
			computation = prev * current
			break
	}
	return computation.toString()
}

export default reducer
