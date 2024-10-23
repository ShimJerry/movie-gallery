import { setupWorker } from "msw/browser";
import { clientHandlers } from "./handlers";

export const worker = setupWorker(...clientHandlers);
