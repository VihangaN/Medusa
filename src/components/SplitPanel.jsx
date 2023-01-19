import React from 'react'

export default function SplitPanel(props) {
    const {position} = props;
  return (
    <div className={`split-pane-base ${position == 'left' ? 'left' : 'right'}`}></div>
  )
}
