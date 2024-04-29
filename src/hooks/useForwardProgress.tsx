import { useEffect } from 'react'

import { useProgressStore } from '../store/progressStore'

const useForwardProgress = (delay: number = 1500) => {
	const requestStatus = useProgressStore((state) => state.requestStatus)
	const forwardProgress = useProgressStore((state) => state.forwardProgress)

	useEffect(() => {
		let timeoutId: NodeJS.Timeout

		if (requestStatus === 'success') {
			timeoutId = setTimeout(() => {
				forwardProgress()
			}, delay)
		}

		return () => {
			clearTimeout(timeoutId)
		}
	}, [requestStatus, forwardProgress, delay])
}

export default useForwardProgress