import { handleContact } from "./contact.mjs";
import { sendRelay } from "./relay.mjs";

export default {
  async fetch(request, env) {
    const path = new URL(request.url).pathname.replace(/\/$/, "");
    if (path === "/api/contact") {
      return handleContact(request, env, { send: sendRelay });
    }
    return env.ASSETS.fetch(request);
  },
};
