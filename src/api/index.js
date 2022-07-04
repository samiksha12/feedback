import { BACKEND_DOMAIN_USER, BACKEND_DOMAIN_DATA } from "../config";
export const getUserData = async () => {
  const resp = await fetch(`${BACKEND_DOMAIN_USER}`);
  const data = await resp.json();
  return data;
};

export const getData = async () => {
  const resp = await fetch(`${BACKEND_DOMAIN_DATA}`);
  const data = await resp.json();
  return data;
};
export const postData = async (data) => {
  const rep = await fetch(`${BACKEND_DOMAIN_DATA}`, {
    mode: "cors",
    credentials: "include",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
export const deleteData = async (url, id) => {
  const rep = await fetch(`${BACKEND_DOMAIN_DATA}${url}/${id}`, {
    method: "DELETE",
  });
};
export const putData = async (url, id, data) => {
  const rep = await fetch(`${BACKEND_DOMAIN_DATA}${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
