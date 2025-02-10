import React, { memo } from 'react'

const Child = memo(({ handleClick }) => {
    console.log('child rendered', handleClick);

    return (
        <div>Child</div>
    )
})

export default Child