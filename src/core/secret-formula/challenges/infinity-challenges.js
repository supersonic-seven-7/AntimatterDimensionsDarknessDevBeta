import { DC } from "../../constants";

export const infinityChallenges = [
  {
    id: 1,
    description: `all Normal Challenge restrictions are active at once, with the exception of the
      Tickspeed (C9) and Big Crunch (C12) Challenges.`,
    goal: DC.E850,
    isQuickResettable: true,
    reward: {
      description: () => (Achievement(115).isUnlocked
        ? `${formatX(12345.6, 1, 1)} on all Infinity Dimensions for each Infinity Challenge completed`
        : `${formatX(30.3, 1, 1)} on all Infinity Dimensions for each Infinity Challenge completed`),
      effect: () => (Achievement(115).isUnlocked
        ? Math.pow(12345, InfinityChallenges.completed.length)
        : Math.pow(30.3, InfinityChallenges.completed.length)),
      formatEffect: value => formatX(value, 1, 1)
    },
    unlockAM: DC.E1500,
  },
  {
    id: 2,
    description: `all Normal Challenge restrictions are active at once except only the Big Crunch Autobuyer (C12) Challenge.`,
    goal: DC.E1300,
    isQuickResettable: true,
    reward: {
      description: () => `Improve the Infinity Power Conversion Rate based on Dimboosts`,
      effect: () => (Achievement(122).isUnlocked
        ? Math.pow(Math.max(DimBoost.purchasedBoosts - 777, 0), 0.1) + 6
        : Math.min(Math.pow((DimBoost.purchasedBoosts + 1) * 10, 0.2), 6)),
      formatEffect: value => `+${format(value, 2, 2)}`
    },
    unlockAM: DC.E3000,
  },
  {
    id: 3,
    description: () => `Dimensional Sacrifice happens automatically every ${formatInt(400)} milliseconds once you have
      an 8th Antimatter Dimension.`,
    goal: DC.E8000,
    isQuickResettable: false,
    reward: {
      description: () => `Dimensional Sacrifice autobuyer and stronger Dimensional Sacrifice
        ${Sacrifice.getSacrificeDescription({ "InfinityChallenge2isCompleted": false })} ➜
        ${Sacrifice.getSacrificeDescription({ "InfinityChallenge2isCompleted": true })}`,
    },
    unlockAM: DC.E8000,
  },
  {
    id: 4,
    description: () =>
      `Tickspeed upgrades are always ${formatX(1)}. For every Tickspeed upgrade purchase, you instead get a static
      multiplier on all Antimatter Dimensions.`,
    goal: DC.E9000,
    isQuickResettable: false,
    effect: () => Decimal.pow(1.05, player.totalTickBought),
    formatEffect: value => formatX(value, 2, 2),
    reward: {
      description: `Antimatter Dimension multiplier based on Tickspeed purchases`,
      effect: () => (Laitela.continuumActive
        ? Decimal.pow(1.05, Tickspeed.continuumValue)
        : Decimal.pow(1.05, player.totalTickBought)),
      formatEffect: value => formatX(value, 2, 2),
    },
    unlockAM: DC.E10000,
  },
  {
    id: 5,
    description: () =>
      `only the latest bought Antimatter Dimension's production is normal. All other Antimatter Dimensions
      produce less (${formatPow(0.25, 2, 2)}).`,
    goal: DC.E11000,
    isQuickResettable: true,
    effect: 0.25,
    reward: {
      description: () => `All Antimatter Dimension multipliers become multiplier${formatPow(1.2, 2, 2)}`,
      effect: 1.2
    },
    unlockAM: DC.E12000,
  },
  {
    id: 6,
    description:
      `buying Antimatter Dimensions 1-4 causes all cheaper AD costs to increase.
      Buying Antimatter Dimensions 5-8 causes all more expensive AD costs to increase.`,
    goal: DC.E20000,
    isQuickResettable: true,
    reward: {
      description: () =>
        `Reduce the requirements for Dimension Boosts by ${formatInt(1)} and multiply all Infinity Dimensions
        based on them`,
      effect: () => Math.pow((DimBoost.purchasedBoosts + 1), 3),
      formatEffect: value => formatX(value, 2, 2),
    },
    unlockAM: DC.E21000,
  },
  {
    id: 7,
    description: () =>
      `exponentially rising matter divides the multiplier on all of your Antimatter Dimensions
      once you have at least ${formatInt(1)} 2nd Antimatter Dimension.`,
    goal: DC.E41414,
    isQuickResettable: true,
    effect: () => Currency.matter.value.clampMin(1),
    formatEffect: value => `/${format(value, 1, 2)}`,
    reward: {
      description: "Dimboost multiplier based on tickspeed",
      effect: () => (Achievement(135).isUnlocked
        ? (Tickspeed.perSecond.log10() / 100) + 100
        : Tickspeed.perSecond.pow(0.01).clampMax(100)),
      formatEffect: value => formatX(value, 2, 2),
    },
    unlockAM: DC.E42000,
  },
  {
    id: 8,
    description: () => {
      // Copied from DimBoost.power; this is the base amount before any multipliers. Post-eternity this isn't
      // necessarily 2.5x by the time the player sees this challenge; it's probably most accurate to say what it
      // currently is, and this phrasing avoids 10x ➜ 10x with the old description.
      const mult = Effects.max(
        3,
        InfinityUpgrade.dimboostMult,
        InfinityChallenge(8).reward,
        TimeStudy(81)
      );
      return `Base Dimension Boost multiplier is divided by ${formatInt(10)}. (Current base multiplier: ${formatX(mult, 2, 1)})`;
    },
    goal: DC.E92000,
    isQuickResettable: false,
    effect: 0.1,
    reward: {
      description: () => `Dimension Boost multiplier is increased to a minimum of ${formatX(6)}`,
      effect: 6
    },
    unlockAM: DC.E100000,
  },
  {
    id: 9,
    description: () =>
      `AD production rapidly and continually drops over time. Purchasing Antimatter Dimension or Tickspeed
        upgrades sets production back to ${formatPercents(1)} before it starts dropping again.`,
    goal: DC.E175000,
    isQuickResettable: true,
    effect: () => DC.D0_8446303389034288.pow(
      Math.max(0, player.records.thisInfinity.time - player.records.thisInfinity.lastBuyTime)),
    reward: {
      description:
        "You get a multiplier to AD 2-7 based on 1st and 8th AD multipliers.",
      effect: () => AntimatterDimension(1).multiplier.times(AntimatterDimension(8).multiplier).pow(0.02),
      formatEffect: value => formatX(value, 2, 2)
    },
    unlockAM: DC.E175000,
  },
  {
    id: 10,
    description: () =>
      `Dimboosts are disabled.`,
    goal: DC.E80000,
    isQuickResettable: false,
    reward: {
      description:
        "Infinity Power Conversion Rate is improved based on Achievements",
      effect: () => Math.pow(Achievements.effectiveCount * 0.02, 2.5),
      formatEffect: value => `+${format(value, 2, 2)}`
    },
    unlockAM: DC.E300000,
  },
  {
    id: 11,
    description: () =>
      `You are trapped in IC5 and IC6 at the same time.`,
    goal: DC.E620000,
    isQuickResettable: true,
    reward: {
      description:
        "Buff Replicanti Speed and Replicanti Boosters based on Dimboosts",
      effect: () => Math.pow(DimBoost.purchasedBoosts + 1, 0.3),
      formatEffect: value => formatX(value, 2, 2)
    },
    unlockAM: DC.E725000,
  },
  {
    id: 12,
    description: () =>
      `You are trapped in IC1, IC5 and IC6 at the same time.`,
    goal: DC.E500000,
    isQuickResettable: true,
    reward: {
      description:
        "Unlock Eternity"
    },
    unlockAM: DC.E1E6,
  },
];
