import React from "react";

function Posts({ posts, loading }) {
  if (loading) {
    return <h1 className="text-secondary mt-4">Loading...</h1>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
