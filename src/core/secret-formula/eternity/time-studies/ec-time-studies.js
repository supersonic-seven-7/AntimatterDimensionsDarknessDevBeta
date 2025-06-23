import { DC } from "../../../constants";

export const ecTimeStudies = [
  {
    id: 1,
    cost: 888,
    requirement: [171],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "Eternities",
      current: () => Currency.eternities.value,
      required: completions => new Decimal(20000 + Math.min(completions, Enslaved.isRunning ? 999 : 4) * 20000),
      formatValue: formatInt
    }
  },
  {
    id: 2,
    cost: 909,
    requirement: [171],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "Tickspeed upgrades from Time Dimensions",
      current: () => player.totalTickGained,
      required: completions => 14300 + Math.min(completions, 4) * 18300,
      formatValue: formatInt
    }
  },
  {
    id: 3,
    cost: 960,
    requirement: [171],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "8th Antimatter Dimensions",
      current: () => AntimatterDimension(8).totalAmount,
      required: completions => new Decimal(67400 + Math.min(completions, 4) * 8150),
      formatValue: value => formatInt(Math.floor(value.toNumber()))
    }
  },
  {
    id: 4,
    cost: 1030,
    requirement: [143],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "Infinities",
      current: () => Currency.infinitiesTotal.value,
      required: completions => new Decimal(1e8 + Math.min(completions, 4) * 2.5e7),
      formatValue: value => formatInt(Math.floor(value.toNumber()))
    }
  },
  {
    id: 5,
    cost: 1490,
    requirement: [42],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "Eternity Challenge Completions",
      current: () => EternityChallenges.completions,
      required: completions => 5 + Math.min(completions, 4) * 5,
      formatValue: formatInt
    }
  },
  {
    id: 6,
    cost: 1333,
    requirement: [121],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "Replicanti Boosters",
      current: () => player.replicanti.galaxies,
      required: completions => 192 + Math.min(completions, 4) * 12,
      formatValue: formatInt
    }
  },
  {
    id: 7,
    cost: 1375,
    requirement: [111],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "antimatter",
      current: () => Currency.antimatter.value,
      required: completions => DC.E1E15.pow(Math.min(completions, 4)).times(DC.E1_39E7),
      formatValue: value => format(value)
    }
  },
  {
    id: 8,
    cost: 1425,
    requirement: [123],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "Infinity Points",
      current: () => Currency.infinityPoints.value,
      required: completions => DC.E1E15.pow(Math.min(completions, 4)).times(DC.E72000),
      formatValue: value => format(value)
    }
  },
  {
    id: 9,
    cost: 9999,
    requirement: [151],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "Infinity Power",
      current: () => Currency.infinityPower.value,
      required: completions => DC.E2000.pow(Math.min(completions, 4)).times(DC.E17500),
      formatValue: value => format(value)
    }
  },
  {
    id: 10,
    cost: 9999,
    requirement: [181],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      resource: "Eternity Points",
      current: () => Currency.eternityPoints.value,
      required: completions => DC.E20.pow(Math.min(completions, 4)).times(DC.E100),
      formatValue: value => format(value)
    }
  },
  {
    id: 11,
    cost: 9999,
    requirement: [231, 232],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      path: "Antimatter Dimension",
      forbiddenStudies: [72, 73],
    }
  },
  {
    id: 12,
    cost: 9999,
    requirement: [233, 234],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    secondary: {
      path: "Time Dimension",
      forbiddenStudies: [71, 72],
    }
  }
];
