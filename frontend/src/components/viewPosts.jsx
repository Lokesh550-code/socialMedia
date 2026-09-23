import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { getPosts } from "../services/API.js";
import { useNavigate } from "react-router";

const viewPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const { data } = await getPosts();
        setPosts([...data]);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center px-4">
      <div className="w-full h-20 flex justify-center items-center ">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-zinc-800 text-lg px-4 py-3 rounded-xl border-zinc-500 boorder-2 hover:bg-zinc-700 hover:cursor-pointer"
        >
          Home
        </button>
      </div>
      {posts.map((elem, key) => (
        <PostCard elem={elem} key={key} />
      ))}
    </div>
  );
};

export default viewPosts;
