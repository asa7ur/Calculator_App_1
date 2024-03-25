import './App.css'

function App() {
  return (
		<div className='container'>
			<h1>calculator</h1>
			<div className='display'>
				<div className='previous-operand'>123.123</div>
				<div className='current-operand'>123.123</div>
			</div>
			<div className='buttons'>
				<button className='operator clear span-two' onClick={() => handleClear()}>
					AC
				</button>
				<button className='operator' onClick={() => handleClick('(')}>
					DEL
				</button>
				<button className='operator' onClick={() => handleClick('÷')}>
					÷
				</button>
				<button className='number' onClick={() => handleClick('7')}>
					7
				</button>
				<button className='number' onClick={() => handleClick('8')}>
					8
				</button>
				<button className='number' onClick={() => handleClick('9')}>
					9
				</button>
				<button className='operator' onClick={() => handleClick('×')}>
					×
				</button>
				<button className='number' onClick={() => handleClick('4')}>
					4
				</button>
				<button className='number' onClick={() => handleClick('5')}>
					5
				</button>
				<button className='number' onClick={() => handleClick('6')}>
					6
				</button>
				<button className='operator' onClick={() => handleClick('-')}>
					-
				</button>
				<button className='number' onClick={() => handleClick('1')}>
					1
				</button>
				<button className='number' onClick={() => handleClick('2')}>
					2
				</button>
				<button className='number' onClick={() => handleClick('3')}>
					3
				</button>
				<button className='operator' onClick={() => handleClick('+')}>
					+
				</button>
				<button className='number' onClick={() => handleClick('.')}>
					.
				</button>
				<button className='number' onClick={() => handleClick('0')}>
					0
				</button>
				<button className='operator span-two' onClick={() => handleClick('=')}>
					=
				</button>
			</div>
		</div>
	)
}

export default App
