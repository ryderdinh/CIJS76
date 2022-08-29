function Description(props) {
	const { content, number, children } = props
	return (
		<>
			<p>{content}</p> <p>{number}</p>
			{children}
		</>
	)
}

export default Description
