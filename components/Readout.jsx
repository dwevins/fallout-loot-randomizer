import React from 'react'

const Readout = ({loot}) => (
  <div className="readout">
    {loot.length > 0 && loot.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
    {!loot.length && (
      <p>no loot generated</p>
    )}
  </div>
)

export default Readout
