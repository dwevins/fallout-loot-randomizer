import React from 'react'

const Field = ({
  checked,
  id,
  label,
  name,
  onChange,
  type
}) => (
  <div className="field">
    <label htmlFor={id}>
      <input
        checked={checked}
        id={id}
        name={name}
        onChange={onChange}
        type={type}
      />
      {label}
    </label>
  </div>
)

export default Field
