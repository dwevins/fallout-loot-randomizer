import React, { useEffect, useState } from 'react'

function submit(e) {
  e.preventDefault()
  console.log('submit')
  return false
}

const Generator = () => {
  const [numItems, setNumItems] = useState('1')
  const [allowAmmo, setAllowAmmo] = useState(false)
  const [allowConsumables, setAllowConsumables] = useState(false)
  const [allowMaterials, setAllowMaterials] = useState(false)

  return (
    <form onSubmit={(e) => submit(e)}>
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
        <h3>Allowed loot types</h3>
        <div className="field">
          <label htmlFor="allowAmmo">
            <input
              checked={allowAmmo}
              id="allowAmmo"
              name="itemTypes"
              onChange={() => setAllowAmmo(!allowAmmo)}
              type="checkbox"
            />
            Ammo
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
            Consumables
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
            Materials
          </label>
        </div>
      </div>

      <button type="submit">Roll</button>
    </form>
  )
}

export default Generator
