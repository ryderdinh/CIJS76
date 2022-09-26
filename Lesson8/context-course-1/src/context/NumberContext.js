import { createContext, useState } from 'react'

export const NumberContext = createContext()

export const NumberProvider = ({ children }) => {
	const [count, setCount] = useState(0)

	const inCreaseCount = () => {
		setCount(count + 1)
	}

  

	return (
		<NumberContext.Provider
			value={{
				count,
				setCount,
				inCreaseCount
			}}
		>
			{children}
		</NumberContext.Provider>
	)
}
