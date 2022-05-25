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
        <router-link :to="`/detail/${keyword}/${member.id}`">
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
import { computed, defineComponent, Ref, ref } from "vue";
import { Member } from "@/types";
import { useMembersApi } from "@/composables/membersApi";

export default defineComponent({
  async setup() {
    const keyword: Ref<string> = ref("lemoncode");
    const { list } = await useMembersApi(keyword.value.toLocaleLowerCase());
    let newList;
    async function submitOrganization() {
      console.log(keyword.value);
      newList = await useMembersApi(keyword.value.toLocaleLowerCase());
      console.log(newList);
    }
    /*const filteredList = computed<Member[]>(() => {
      return list.value.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(keyword.value.toLocaleLowerCase());
      });
    });*/

    return {
      list,
      keyword,
      submitOrganization,
      newList,
    };
  },
});
</script>

<style scoped>
.product-container--has-discount {
  background-color: pink;
}
</style>
