function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function rollAmmo() {
  const types = [
    'handgun',
    'shotgun',
    'rifle',
    'energy'
  ]

  return types[getRandom(types.length)]
}

function rollConsumables() {
  const types = [
    'health',
    'rads',
    'chems',
    'food',
    'drink'
  ]

  return types[getRandom(types.length)]
}

function rollMaterials() {
  const types = [
    'leather',
    'steel',
    'wood'
  ]

  return types[getRandom(types.length)]
}

export function generateLoot({
  allowAmmo,
  allowConsumables,
  allowMaterials,
  numItems
}) {
  const loot = []
  const funcs = []

  allowAmmo && funcs.push(rollAmmo)
  allowConsumables && funcs.push(rollConsumables)
  allowMaterials && funcs.push(rollMaterials)

  if (funcs.length) {
    for (let i = 0; i < numItems; i++) {
      loot.push(funcs[getRandom(funcs.length)]())
    }
  }

  return loot
}
