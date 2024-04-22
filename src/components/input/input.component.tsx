import { useState, ChangeEvent, FocusEvent } from 'react'

import { InputContainer } from './input.styles'

type InputProps = {
	name?: string
	type?: string
	value?: string | number
	placeholder?: string
	isValid: boolean
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
	const { name, type, value, placeholder, isValid, handleChange } = props

	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleFocus = (e: FocusEvent<HTMLInputElement>) => setIsFocused(true)
	const handleBlur = (e: FocusEvent<HTMLInputElement>) => setIsFocused(false)

	return (
		<InputContainer
			type={type}
			name={name}
			value={value}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onChange={handleChange}
			placeholder={placeholder}
			$isFocused={isFocused}
			$isValid={isValid}
		/>
	)
}

Input.defaultProps = {
	isValid: true,
}
