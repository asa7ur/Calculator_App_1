import { ACTIONS } from './Actions'

const OperationButton = ({ dispatch, operation }) => {
	return (
		<button
			className='operator'
			onClick={() =>
				dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
			}
		>
			{operation}
		</button>
	)
}

export default OperationButton
