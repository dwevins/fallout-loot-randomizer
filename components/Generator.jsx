import React, { useEffect, useState } from 'react'
import { generateLoot } from './utils'

function submit(e, formData) {
  e.preventDefault()
  const loot = generateLoot(formData)
  console.log(loot)
  return false
}

const Generator = () => {
  const [numItems, setNumItems] = useState('1')
  const [allowAmmo, setAllowAmmo] = useState(false)
  const [allowConsumables, setAllowConsumables] = useState(false)
  const [allowMaterials, setAllowMaterials] = useState(false)

  const formData = {
    allowAmmo,
    allowConsumables,
    allowMaterials,
    numItems
  }

  return (
    <form onSubmit={(e) => submit(e, formData)}>
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
        <div className="field">
          <label htmlFor="allowAmmo">
            <input
              checked={allowAmmo}
              id="allowAmmo"
              name="itemTypes"
              onChange={() => setAllowAmmo(!allowAmmo)}
              type="checkbox"
            />
            Allow Ammo
          </label>
        </div>

        <div className="field">
          <label htmlFor="allowConsumables">
          <input
              checked={allowConsumables}
              id="allowConsumables"
              name="itemTypes"
              onChange={() => setAllowConsumables(!allowConsumables)}
              type="checkbox"
            />
            Allow Consumables
          </label>
        </div>

        <div className="field">
          <label htmlFor="allowMaterials">
          <input
              checked={allowMaterials}
              id="allowMaterials"
              name="itemTypes"
              onChange={() => setAllowMaterials(!allowMaterials)}
              type="checkbox"
            />
            Allow Materials
          </label>
        </div>
      </div>

      <button type="submit">Roll</button>
    </form>
  )
}

export default Generator
