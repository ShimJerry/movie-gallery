import { HttpResponse, http } from "msw";

export const serverHandlers = [
  http.get("", () => {
    return HttpResponse.json({
      data: {},
    });
  }),
];

export const clientHandlers = [
  http.get("", () => {
    return HttpResponse.json({
      data: {},
    });
  }),
];
