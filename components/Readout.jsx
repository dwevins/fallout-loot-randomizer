import React from 'react'
import { List } from 'semantic-ui-react'

const Readout = ({loot}) => (
  <div className="readout">
    <List>
      {loot.length > 0 && loot.map((item, index) => (
        <List.Item key={index}>{item}</List.Item>
      ))}
      {!loot.length && (
        <List.Item>no loot generated</List.Item>
      )}
    </List>
  </div>
)

export default Readout
