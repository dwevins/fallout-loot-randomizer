import * as Base from '../BaseTypes'

const defMod = (def = 0) => def + 1
const durMod = (dur = 0) => dur - 1
const getSetStats = (base) => ({
  description: `${base.description} cobbled together by raiders.`,
  defense: defMod(base.defense),
  durability: durMod(base.durability),
  name: `Raider ${base.name}`
})

export const Helmet = {
  ...Base.Helmet,
  ...getSetStats(Base.Helmet)
}

export const LeftArm = {
  ...Base.LeftArm,
  ...getSetStats(Base.LeftArm)
}

export const LeftLeg = {
  ...Base.LeftLeg,
  ...getSetStats(Base.LeftLeg)
}

export const RightArm = {
  ...Base.RightArm,
  ...getSetStats(Base.RightArm)
}

export const RightLeg = {
  ...Base.RightLeg,
  ...getSetStats(Base.RightLeg)
}
