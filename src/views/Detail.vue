<template>
  <div class="grid">
    <div>
      <img :src="member.avatar_url" alt="" />
    </div>
    <div v-if="member">
      <h1>{{ member.login }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocation } from "vue-router";
import { Member } from "@/types";

export default defineComponent({
  data: () => ({
    member: {} as Member,
  }),
  computed: {
    login(): string {
      return String((this.$route as RouteLocation).params.login);
    },
  },
  created() {
    fetch(`https://api.github.com/users/${this.login}`)
      .then((r) => r.json())
      .then((res) => {
        if (res) this.member = res;
      });
  },
});
</script>
