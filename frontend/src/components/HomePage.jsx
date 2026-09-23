import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-screen flex justify-center items-center gap-4 text-white bg-black">
      <button onClick={() => {navigate("/create-post")}} className="bg-stone-800 px-4 py-2 rounded ">Create a post</button>
      <button onClick={()=> {navigate("/view-posts")}} className="bg-stone-800 px-4 py-2 rounded ">View Posts</button>
    </div>
  );
};

export default HomePage;
