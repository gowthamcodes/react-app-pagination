import React from "react";

function Posts({ posts, loading }) {
  if (loading) {
    return (
      <div class="d-flex justify-content-center mt-5">
        <div class="spinner-border text-primary text-center " role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
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
