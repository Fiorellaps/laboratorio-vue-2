<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Members</h1>
    </div>
    <div class="flex align-items-center">
      <input v-model="keyword" placeholder="write to find organization" />
      <button @click="submitOrganization">Submit</button>
    </div>
    <ul>
      <li v-for="member in list" :key="member.id">
        <router-link :to="`/detail/${member.login}`">
          <article class="grid member-container card">
            <div class="image">
              <img :src="member.avatar_url" alt="" class="member-img" />
            </div>
            <div class="member-container__content">
              <h2>
                {{ member.login }}
              </h2>
            </div>
          </article>
        </router-link>
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { Member } from "@/types";

export default defineComponent({
  // Create a new store instance.

  async setup() {
    const keyword: Ref<string> = ref("lemoncode");

    const list: Ref<Member[]> = ref([]);
    //const { list } = await useMembersApi(keyword.value.toLocaleLowerCase());
    const getMembers = (organization: string) => {
      fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((r) => r.json())
        .then((res) => (list.value = res));
    };
    getMembers(keyword.value.toLocaleLowerCase());

    function submitOrganization() {
      getMembers(keyword.value.toLocaleLowerCase());
    }

    return {
      list,
      keyword,
      submitOrganization,
      getMembers,
    };
  },
});
</script>

<style scoped>
.product-container--has-discount {
  background-color: pink;
}
</style>
