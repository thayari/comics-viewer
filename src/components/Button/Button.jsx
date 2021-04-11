import React from 'react'

export default function Button(props) {
  return (
    <button className={`btn ${props.className} ${props.disabled ? 'disabled' : ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
