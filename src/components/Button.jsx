import React from 'react'

const Button = ({ icon, bgColor, color, size, text, borderRadius, padding }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius, padding }}
      className={`text-${size}`}
    >
      {icon} {text}
    </button>
  )
}

export default Button