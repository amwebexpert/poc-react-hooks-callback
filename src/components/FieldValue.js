import React from 'react'

function FieldValue({ text, value }) {
	console.log(`Rendering FieldValue [${text}]`)

	return <span> {text} - {value} </span>
}

export default React.memo(FieldValue)
