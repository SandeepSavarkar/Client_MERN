import React from 'react'

const ErrorHandler = ({ error, isShowDefault, otherErrorUI: OtherErrorUI, ...props }) => {
    console.log('error', error)
    return isShowDefault ? <div className='w-100' {...props} >
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
    </div> : <OtherErrorUI {...props} />
}

export default ErrorHandler