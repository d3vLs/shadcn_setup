import { atom, useAtom } from "jotai";

import { Mail, mails } from "../../lib/mailData";

// type Config = {
//   selected: Mail["id"] | null,
// };

const configAtom = atom({
  selected: mails[0].id,
});

export function useMail() {
  return useAtom(configAtom);
}
