import React from 'react'

export default function NavPane(props) {
    const {position} = props;
  return (
    <div className={`nav-base ${position == 'left' ? 'left' : 'right'}`}>
        <div className="nav-wrapper">
            nav
        </div>
    </div>
  )
}
