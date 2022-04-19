import React from 'react'

const Header = (props) => {
  return (
    <div>
          <div style={{textAlign:"left"}}>
                <h4 className='title p-3'> {props.data.title} </h4>
                <p className='text p-3'> {props.data.text} </p>
            </div>
    </div>
  )
}

export default Header