import { useState } from "react";
import { createPost } from "../services/API.js";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const onSubmitHandle = (event) => {
    event.preventDefault();
    const data = new FormData();

    data.append("image", image);
    data.append("caption", caption);

    try {
      const setData = async (formData) => {
        await createPost(formData);
      };
      setData(data);
    } catch (error) {
      console.log(error);
    }
    setImage(null);
    setCaption("");
    navigate("/view-posts");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };
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
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">Create a post</h1>
        </div>

        <form
          className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6"
          onSubmit={(event) => {
            onSubmitHandle(event);
          }}
        >
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Image
            </label>

            <label className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-zinc-950 transition hover:border-zinc-500 hover:bg-zinc-900">
              {" "}
              {image ? (
                <>
                  {" "}
                  <span className="text-sm text-green-400">
                    {" "}
                    ✓ Image selected{" "}
                  </span>{" "}
                  <span className="mt-1 max-w-full truncate px-6 text-xs text-zinc-500">
                    {" "}
                    {image.name}{" "}
                  </span>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <span className="text-sm text-zinc-300">
                    {" "}
                    Click to upload an image{" "}
                  </span>{" "}
                  <span className="mt-1 text-xs text-zinc-500">
                    {" "}
                    PNG, JPG or WEBP{" "}
                  </span>{" "}
                </>
              )}{" "}
              <input
                onChange={handleImageChange}
                type="file"
                accept="image/*"
                className="hidden"
                required
              />{" "}
            </label>
          </div>

          <div className="mb-6">
            <label
              htmlFor="caption"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Caption
            </label>

            <textarea
              onChange={(e) => {
                setCaption(e.target.value);
              }}
              id="caption"
              placeholder="What's on your mind?"
              required
              rows={4}
              className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 hover:cursor-pointer active:scale-[0.99]"
          >
            Publish post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
