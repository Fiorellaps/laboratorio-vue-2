<template>
  <div class="home">
    <div v-if="error">Error :(</div>
    <Suspense>
      <template #default>
        <MemberList />
      </template>
      <template #fallback>loading...</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref, Ref } from "vue";
import MemberList from "@/components/MemberList.vue";

export default defineComponent({
  name: "Home",
  components: {
    MemberList,
  },
  setup() {
    const error: Ref<unknown> = ref();
    onErrorCaptured((errorCaptured) => {
      error.value = errorCaptured;
    });
    return {
      error,
    };
  },
});
</script>
