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
import { membersService } from "@/service/membersService";

export default defineComponent({
  data: () => ({
    member: {} as Member,
  }),
  computed: {
    id(): string {
      return String((this.$route as RouteLocation).params.id);
    },
    organization(): string {
      return String((this.$route as RouteLocation).params.organization);
    },
  },
  created() {
    membersService
      .getMember(this.id, this.organization)
      .then((member: Member | undefined) => {
        if (member) {
          this.member = member;
        }
      });
  },
});
</script>
