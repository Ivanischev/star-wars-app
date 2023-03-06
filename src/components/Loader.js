import React from 'react'

export const Loader = () => {
  return (
    <span className="loader">
      <svg viewBox="0 0 100 100" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#ffa500" strokeWidth="5">
          <animate attributeName="stroke-dasharray" from="0, 300" to="150, 150" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-dashoffset" from="0" to="-300" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </span>
  )
}
