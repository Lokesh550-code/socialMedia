const PostCard = (elem) => {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <img
        src={elem.image}
        alt={elem.caption}
        className="h-auto w-full object-cover"
      />

      <div className="px-4 py-4">
        <p className="text-sm leading-relaxed text-zinc-200">
          {elem.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
