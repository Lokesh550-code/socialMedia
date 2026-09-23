import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getPosts = async () => {
  const data = await api.get("/posts");
  return data.data;
};

export const createPost = async (data) => {
    await api.post("/create-post", data);
}