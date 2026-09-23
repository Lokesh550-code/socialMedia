import { useState } from "react";
import PostCard from "./PostCard";

const viewPosts = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 text-white bg-black">
      {posts.map((elem, key) => (
        <PostCard elem={elem} key={key} />
      ))}
    </div>
  );
};

export default viewPosts;
