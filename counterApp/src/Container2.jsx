import React from 'react'

const Container2 = (props) => {
  return (
    <div>
        {props.list.map((count, index) => (
            <div key={index}>
                <h1>Count: {count}</h1>
            </div>
        ))

        }
    </div>
  )
}

export default Container2