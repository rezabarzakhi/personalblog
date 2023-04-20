import React, { useState, useEffect } from "react";
import "./Articles.css";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    fetch("http://localhost:3000/posts", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="articles">
        <h1 className="articlesTitle">Articles</h1>
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
