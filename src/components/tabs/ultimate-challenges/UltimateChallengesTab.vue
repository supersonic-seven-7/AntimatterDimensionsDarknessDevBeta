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
      const last = this.nextUC?.id === undefined;
      const next = UltimateChallenges.nextUCUnlockReq;

      if (first) return `The first Ultimate Challenge unlocks at Eternity.`;
      if (last) return "All Ultimate Challenges unlocked... so far";
      return `Next Ultimate Challenge unlocks at ${format(next)} antimatter.`;
    }
  },
  methods: {
    update() {
      this.nextUC = UltimateChallenges.nextUC;
      this.showAllChallenges = player.options.showAllChallenges;
    },
    isChallengeVisible(challenge) {
      return challenge.isUnlocked || (this.showAllChallenges && PlayerProgress.realityUnlocked());
    }
  }
};
</script>

<template>
  <div class="l-challenges-tab">
    <ChallengeTabHeader />
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
