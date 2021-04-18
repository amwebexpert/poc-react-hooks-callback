import React, { useState, useCallback, useMemo } from 'react'
import FieldValue from './FieldValue'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
	const [count, setCount] = useState(1);
	const [age, setAge] = useState(25);
	const [salary, setSalary] = useState(50000);

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000);
	}, [salary]);

	const incrementAge = useCallback(() => {
		setAge(age => age + 1);
	}, [setAge]);

	const incrementCounter = useCallback(() => {
		setCount(count => count + 1);
	}, []);

	const isCountEven = useMemo(() => {
		console.log('Computing isEven...');

		// Simulate processing
		let i = 0;
		while (i < 3000000000) {
			i++
		}

		return count % 2 === 0;
	}, [count]);

	return (
		<div>
			<Title />

			<p>See <strong>React.memo()</strong> usage inside Button and FieldValue components</p>

			<FieldValue text="Salary" value={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>

			<br /><br />

			<FieldValue text="Age" value={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>

			<br /><br />

			<FieldValue text="Counter" value={count} /> - {isCountEven ? ' Even ' : ' Odd '}
			<Button handleClick={incrementCounter}>Increment Counter</Button>

			<br /><br />

		</div>
	)
}

export default ParentComponent
