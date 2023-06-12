import instance from "./instance";

export const signup = (user) => {
  const url = `/signup`;
  return instance.post(url, user);
};
export const login = (user) => {
  const url = `/login`;
  return instance.post(url, user);
};
