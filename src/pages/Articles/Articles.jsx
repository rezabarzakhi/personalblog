import React, { useState, useEffect } from "react";
import "./Articles.css";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const getArticles = () => {
    fetch("https://my-json-server.typicode.com/rezabarzakhi/blog-posts/posts", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoaded(false);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="articles">
        <h1 className="articlesTitle">Articles</h1>
        {loaded && (
          <div className="loading">
            <h1>Loading ...</h1>
            <div class="lds-dual-ring"></div>
          </div>
        )}
        {articles.map((article) => (
          <div key={article.id} className="articleCard">
            <p className="articleCardDate">{article.date}</p>
            <h1 className="articleCardTitle">{article.title}</h1>
            <p className="articleCarddescription">{article.body}</p>
            <Link to={`/article/${article.id}`} className="articleCardBtn">
              Read More ..
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
