import { computed, Ref, ref } from "vue";
import { membersService } from "@/service/membersService";
import { Member } from "@/types";

export async function useMembersApi(organization: string) {
  const list: Ref<Member[]> = ref([]);
  console.log("org", organization);
  list.value = await membersService.get("lemoncode");

  return {
    list,
  };
}
