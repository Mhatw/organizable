import { BASE_URI, tokenKey } from "../config.js";

export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  const token = sessionStorage.getItem(tokenKey);
  if (token) {
    headers = {
      Authorization: `Token token=${token}`,
      ...headers,
    };
  }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };
  console.log(`${BASE_URI}/${endpoint}`, config);
  const response = await fetch(`${BASE_URI}/${endpoint}`, config);

  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      // console.log(error);
      throw new Error(response.statusText);
    }
    throw new Error(
      data.relation || data.number || data.password || data.errors
    );
  }
  // logout
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}
