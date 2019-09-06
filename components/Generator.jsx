import React, { useState } from 'react'
import { generateLoot } from './utils'
import { Form, Readout } from '.'

const Generator = ({ consumables }) => {
  const [allowAmmo, setAllowAmmo] = useState(false)
  const [allowConsumables, setAllowConsumables] = useState(false)
  const [allowMaterials, setAllowMaterials] = useState(false)
  const [numItems, setNumItems] = useState('1')
  const [loot, setLoot] = useState([])

  const formData = {
    allowAmmo,
    allowConsumables,
    allowMaterials,
    numItems
  }

  const formSetters = {
    setAllowAmmo,
    setAllowConsumables,
    setAllowMaterials,
    setNumItems
  }

  return (
    <div className="generator">
      <h3>Loot Options</h3>
      <Form
        {...formData}
        onSubmit={() => setLoot(generateLoot(formData))}
        {...formSetters}
      />
      <br/>

      <hr/>
      <h3>Generated Loot</h3>
      <Readout loot={loot}/>
    </div>
  )
}

export default Generator
