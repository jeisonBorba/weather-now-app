import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoadingSpinner = () => (
	<div className="align-detail loading">
		<FontAwesomeIcon icon="spinner" pulse size="5x" /><h4> Loading... </h4>
	</div>
)

export default LoadingSpinner