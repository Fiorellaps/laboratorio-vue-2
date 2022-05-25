import { Member } from "@/types";

export const membersService = {
  async get(organization: string): Promise<Member[]> {
    const members = await fetch(
      `https://api.github.com/orgs/${organization}/members`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    ).then((m) => m.json());
    return members;
  },
  async getMember(
    id: Member["id"],
    organization: string
  ): Promise<Member | undefined> {
    if (!id) throw new Error("id is required");
    // usamos el mismo `get` que ya teníamos
    return this.get(organization).then((list) => {
      return list.find((item: Member) => String(item.id) === String(id));
    });
  },
};
