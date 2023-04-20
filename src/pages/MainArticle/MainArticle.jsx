import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./MainArticle.css"

export default function MainArticle() {

    let params = useParams()
  

    const [article , setArticle ] =useState([])

      const getArticle = () => {
        fetch(`http://localhost:3000/posts/${params.articleID}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setArticle(data);
          });
      };

      useEffect(() => {
        getArticle();
      }, []);
  return (
    <>
        <div className="mainArticle">
            <div className="mainArticleHeader">
            <h1 className="mainArticleTitle">{article.title}</h1>
            <p className="mainArticleDate">{article.date}</p>
            </div>
            <p className="mainArticleDescription">{article.body}</p>
        </div>

    </>
  )
}
