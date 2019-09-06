import React, { useState } from 'react'
import { generateLoot } from './utils'
import { Form, Readout } from '.'
import { Container, Divider, Header } from 'semantic-ui-react'

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
      <Container text>
        <Divider hidden />
        <Header>Loot Options</Header>
        <Form
          {...formData}
          onSubmit={() => setLoot(generateLoot(formData))}
          {...formSetters}
        />
      </Container>
      <br/>
      <Divider />
      <Container text>
        <Divider hidden />
        <Header>Generated Loot</Header>
        <Readout loot={loot}/>
      </Container>
    </div>
  )
}

export default Generator
