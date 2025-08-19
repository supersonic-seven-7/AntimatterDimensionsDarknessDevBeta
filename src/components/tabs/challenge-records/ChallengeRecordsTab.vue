<script>
import ChallengeRecordsList from "./ChallengeRecordsList";

export default {
  name: "ChallengeRecordsTab",
  components: {
    ChallengeRecordsList
  },
  data() {
    return {
      infinityChallengesUnlocked: false,
      ultimateChallengesUnlocked: false,
      normalChallenges: [],
      infinityChallenges: [],
      ultimateChallenges: []
    };
  },
  methods: {
    update() {
      this.infinityChallengesUnlocked = PlayerProgress.infinityChallengeCompleted() ||
        PlayerProgress.eternityUnlocked();
      this.ultimateChallengesUnlocked = PlayerProgress.ultimateChallengeCompleted() ||
        PlayerProgress.realityUnlocked();
      this.normalChallenges = player.challenge.normal.bestTimes.slice(0);
      this.infinityChallenges = player.challenge.infinity.bestTimes.slice(0);
      this.ultimateChallenges = player.challenge.ultimate.bestTimes.slice(0);
    }
  }
};
</script>

<template>
  <div class="l-challenge-records-tab c-stats-tab">
    <ChallengeRecordsList
      :start="2"
      :times="normalChallenges"
      name="Normal Challenge"
    />
    <ChallengeRecordsList
      v-if="infinityChallengesUnlocked"
      :start="1"
      :times="infinityChallenges"
      name="Infinity Challenge"
      class="l-challenge-records-tab__infinity_challenges"
    />
    <ChallengeRecordsList
      v-if="ultimateChallengesUnlocked"
      :start="1"
      :times="ultimateChallenges"
      name="Ultimate Challenge"
      class="l-challenge-records-tab__ultimate_challenges"
    />
  </div>
</template>
