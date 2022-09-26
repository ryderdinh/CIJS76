import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const [isShowCountComponent, setIsShowCountComponent] = useState(false)

	const toggleIsShowCountComponent = () => {
		setIsShowCountComponent(!isShowCountComponent)
	}

	return (
		<ThemeContext.Provider
			value={{ isShowCountComponent, toggleIsShowCountComponent }}
		>
			{children}
		</ThemeContext.Provider>
	)
}
