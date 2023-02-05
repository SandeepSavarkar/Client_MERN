import client, { METHODS } from "./client";

export const api = {
  user: {
    getUsers: () =>
      client({
        url: "/users",
        method: METHODS.GET,
      }),
    addUser: (params) =>
      
      client({
        url: "/user",
        data: params,
        method: METHODS.POST,
      }),
  },
};
