import { DC } from "../../constants";

export const ultimateChallenges = [
  {
    id: 1,
    description: () =>
      `You are locked inside all Normal Challenges AT THE SAME TIME. This includes
      Challenge ${formatInt(9)} and Challenge ${formatInt(12)}.`,
    goal: Decimal.NUMBER_MAX_VALUE,
    isQuickResettable: true,
    reward: {
      description: "You can Break Infinity",
    },
    unlockReq: Decimal.NUMBER_MAX_VALUE,
  },
  {
    id: 2,
    description: () =>
      `You are trapped in every Infinity Challenge AT THE SAME TIME.`,
    goal: DC.E1_6E6,
    isQuickResettable: true,
    reward: {
      description:
        "Delay Infinity Dimension Purchase Caps based on Dimension Boosts",
      effect: () => Math.log10(DimBoost.purchasedBoosts + 1) + 1,
      formatEffect: value => formatX(value, 2, 2)
    },
    unlockReq: DC.E3_6E6,
  },
  {
    id: 3,
    description: () =>
      `You are trapped in every Eternity Challenge AT THE SAME TIME.`,
    goal: DC.E1E15,
    isQuickResettable: true,
    reward: {
      description:
        "Increase Tachyon Amplifier Power based on record Antimatter inside this challenge",
      effect: () => (Decimal.log10(player.records.thisReality.bestAMUC3) / Decimal.log10(Decimal.NUMBER_MAX_VALUE)) / 1000,
      formatEffect: value => `+${format(value, 2, 3)}`
    },
    unlockReq: DC.E3E9,
  }
];
