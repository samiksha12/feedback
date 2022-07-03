import { BACKEND_DOMAIN_USER,BACKEND_DOMAIN_DATA } from "../config";
export const getUserData = async (url) => {
  const resp = await fetch(`${BACKEND_DOMAIN_USER}`);
  const data = await resp.json();
  return data;
};

export const getData = async () => {
  const resp = await fetch(`${BACKEND_DOMAIN_DATA}`);
  const data = await resp.json();
  return data;
};
export const postData = async(url,data)=>{
  const rep = await fetch(`${BACKEND_DOMAIN_DATA}${url}`,{
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
export const deleteData= async(url,id)=>{
  const rep = await fetch(`${BACKEND_DOMAIN_DATA}${url}/${id}`,{
    method:"DELETE"
  })
}
export const putData=async(url,id,data)=>{
  const rep = await fetch(`${BACKEND_DOMAIN_DATA}${url}/${id}`,{
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
}