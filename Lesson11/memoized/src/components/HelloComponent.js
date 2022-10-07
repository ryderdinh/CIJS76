import React from 'react'

const HelloComponent = ({ say, data }) => {
	console.log('hello')
	return <div>HelloComponent</div>
}

export default React.memo(HelloComponent)
