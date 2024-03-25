import { ACTIONS } from './Actions'

const DigitButton = ({ dispatch, digit }) => {
	return (
		<button
			className='digit'
			onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
		>
			{digit}
		</button>
	)
}

export default DigitButton
