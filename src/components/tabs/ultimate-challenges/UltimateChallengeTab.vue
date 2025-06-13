<script>
import ChallengeGrid from "@/components/ChallengeGrid";
import ChallengeTabHeader from "@/components/ChallengeTabHeader";
import UltimateChallengeBox from "./UltimateChallengeBox";

export default {
  name: "UltimateChallengesTab",
  components: {
    ChallengeGrid,
    ChallengeTabHeader,
    UltimateChallengeBox
  },
  data() {
    return {
      nextUC: 0,
      showAllChallenges: false
    };
  },
  computed: {
    challenges() {
      return UltimateChallenges.all;
    },
    nextAtDisplay() {
      const first = this.nextUC?.id === 1;
      const last = this.nextUC?.id === 13;
      const next = UltimateChallenges.nextICUnlockAM;

      if (first) return `The first Ultimate Challenge unlocks at ${format(next)} antimatter.`;
      if (last) return "All Ultimate Challenges unlocked";
      return next === undefined
        ? "All Ultimate Challenges unlocked"
        : `Next Ultimate Challenge unlocks at ${format(next)} antimatter.`;
    }
  },
  methods: {
    update() {
      this.nextUC = InfinityChallenges.nextUC;
      this.showAllChallenges = player.options.showAllChallenges;
    },
    isChallengeVisible(challenge) {
      return challenge.isUnlocked;
    }
  }
};
</script>

<template>
  <div class="l-challenges-tab">
    <ChallengeTabHeader />
    <div>
      An active Big Crunch Autobuyer will Crunch immediately when
      reaching an Ultimate Challenge's antimatter goal, regardless of settings.
    </div>
    <div>{{ nextAtDisplay }}</div>
    <ChallengeGrid
      v-slot="{ challenge }"
      :challenges="challenges"
      :is-challenge-visible="isChallengeVisible"
    >
      <UltimateChallengeBox :challenge="challenge" />
    </ChallengeGrid>
  </div>
</template>

<style scoped>

</style>
