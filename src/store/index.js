import { setGlobal } from "reactn";

import notification from "./notification";

export default function initStore(params) {
  setGlobal({
    notification
  });
}
