import { computed, Ref, ref } from "vue";
import { membersService } from "@/service_/membersService";
import { Member } from "@/types";

export async function useMembersApi(organization: string) {
  const list: Ref<Member[]> = ref([]);
  list.value = await membersService.get("lemoncode");

  return {
    list,
  };
}
