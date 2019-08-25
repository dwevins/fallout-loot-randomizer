import React from 'react'
import { Field } from '.'

function handleSubmit(e, callback) {
  e.preventDefault()
  callback()
}

const Form = ({
  allowAmmo,
  allowConsumables,
  allowMaterials,
  numItems,
  onSubmit,
  setAllowAmmo,
  setAllowConsumables,
  setAllowMaterials,
  setNumItems
}) => {

  return (
    <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
      <label htmlFor="numItems">
        Number of items
        <input
          id="numItems"
          min="1"
          name="numItems"
          onChange={(e) => setNumItems(e.target.value)}
          type="number"
          value={numItems}
        />
      </label>

      <div className="container">
        <Field
          checked={allowAmmo}
          id="allowAmmo"
          label="Allow Ammo"
          name="itemTypes"
          onChange={() => setAllowAmmo(!allowAmmo)}
          type="checkbox"
        />

        <Field
          checked={allowConsumables}
          id="allowConsumables"
          label= "Allow Consumables"
          name="itemTypes"
          onChange={() => setAllowConsumables(!allowConsumables)}
          type="checkbox"
        />

        <Field
          checked={allowMaterials}
          id="allowMaterials"
          label="Allow Materials"
          name="itemTypes"
          onChange={() => setAllowMaterials(!allowMaterials)}
          type="checkbox"
        />
      </div>

      <button type="submit">Roll</button>
    </form>
  )
}

export default Form
