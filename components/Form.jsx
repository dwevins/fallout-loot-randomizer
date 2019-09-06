import React from 'react'
import { Divider, Form } from 'semantic-ui-react'

function handleSubmit(e, callback) {
  e.preventDefault()
  callback()
}

const GeneratorForm = ({
  allowAmmo,
  allowConsumables,
  allowMaterials,
  numItems,
  onSubmit,
  setAllowAmmo,
  setAllowConsumables,
  setAllowMaterials,
  setNumItems
}) => (
  <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
    <Form.Input
      id="numItems"
      label="Number of items"
      min="1"
      name="numItems"
      onChange={(e) => setNumItems(e.target.value)}
      type="number"
      value={numItems}
    />

    <Divider hidden />

    <Form.Checkbox
      checked={allowAmmo}
      id="allowAmmo"
      label="Allow Ammo"
      name="itemTypes"
      onChange={() => setAllowAmmo(!allowAmmo)}
      toggle
    />
    <Form.Checkbox
      checked={allowConsumables}
      id="allowConsumables"
      label= "Allow Consumables"
      name="itemTypes"
      onChange={() => setAllowConsumables(!allowConsumables)}
      toggle
    />
    <Form.Checkbox
      checked={allowMaterials}
      id="allowMaterials"
      label="Allow Materials"
      name="itemTypes"
      onChange={() => setAllowMaterials(!allowMaterials)}
      toggle
    />

    <Divider hidden />

    <Form.Button type="submit">Roll</Form.Button>
  </Form>
)

export default GeneratorForm
