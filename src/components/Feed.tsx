import Post from "./Post";

function Feed() {
  return (
    <div className="flex flex-col gap-12 bg-white shadow-md rounded-md p-4 mb-4">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
