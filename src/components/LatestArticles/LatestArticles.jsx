import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LatestArticles.css";

export default function LatestArticles() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    fetch("https://my-json-server.typicode.com/rezabarzakhi/blog-posts/posts", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="latestArticles">
        <h1 className="latestArticlesTitle">Latest Articles</h1>
        {posts.map((post) => (
          <div key={post.id} className="latestArticlesPost">
            <Link to={`/article/${post.id}`}>
              <h3 className="latestsArticlesPostTitle">{post.title}</h3>
              <p className="latestsArticlesPostDate">{post.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
