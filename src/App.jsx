import { useReducer } from 'react'
import OperationButton from './components/OperationButton'
import DigitButton from './components/DigitButton'
import reducer from './components/reducer'
import { ACTIONS } from './components/Actions'
import './App.css'

function App() {
	const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
		reducer,
		{
			currentOperand: '0',
			previousOperand: null,
		}
	)

	return (
		<div className='container'>
			<h1>calculator</h1>
			<div className='display'>
				<div className='previous-operand'>
					{previousOperand} {operation}
				</div>
				<div className='current-operand'>{currentOperand}</div>
			</div>
			<div className='buttons'>
				<button
					className='operator span-two'
					onClick={() => dispatch({ type: ACTIONS.CLEAR })}
				>
					AC
				</button>
				<button
					className='operator'
					onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
				>
					DEL
				</button>
				<OperationButton operation={'÷'} dispatch={dispatch} />
				<DigitButton digit={'7'} dispatch={dispatch} />
				<DigitButton digit={'8'} dispatch={dispatch} />
				<DigitButton digit={'9'} dispatch={dispatch} />
				<OperationButton operation={'×'} dispatch={dispatch} />
				<DigitButton digit={'4'} dispatch={dispatch} />
				<DigitButton digit={'5'} dispatch={dispatch} />
				<DigitButton digit={'6'} dispatch={dispatch} />
				<OperationButton operation={'-'} dispatch={dispatch} />
				<DigitButton digit={'1'} dispatch={dispatch} />
				<DigitButton digit={'2'} dispatch={dispatch} />
				<DigitButton digit={'3'} dispatch={dispatch} />
				<OperationButton operation={'+'} dispatch={dispatch} />
				<DigitButton digit={'.'} dispatch={dispatch} />
				<DigitButton digit={'0'} dispatch={dispatch} />
				<button
					className='operator span-two'
					onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
				>
					=
				</button>
			</div>
		</div>
	)
}

export default App
