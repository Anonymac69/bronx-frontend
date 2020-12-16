import React, { useState, useEffect } from "react";
import { ArticleEdit } from "./articleEdit";
import { Link, Route, useHistory } from "react-router-dom";
import axios from "axios";

function Article({ match }) {
  const [article, setArticle] = useState({});

  const history = useHistory();

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    const fetchArticle = await fetch(
      `http://localhost:8000/article/${match.params.id}`
    );
    const article = await fetchArticle.json();
    setArticle(article);
  };

  let deleteArticle = () => {
    const self = this;
    axios
      .delete(`http://localhost:8000/article/${match.params.id}`)
      .then((res) => {
        history.push("/");
        return <small>Item has been deleted</small>;
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="card-detail">
      <div>
        <h2 className="card-title">{article.title}</h2>
        <p className="card-content">{article.content}</p>
      </div>

      <div className="card-btns">
        <button className="btn">
          <a className="link" href="/">
            Back
          </a>
        </button>
        {/* <button className="btn"><a className="link" href={`/articles/${article.id}/edit`}>Edit</a></button> */}
        <button className="btn">
          <Link to={`/articles/${article.id}/edit`}>Edit</Link>
        </button>
        <button className="btn" onClick={deleteArticle}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Article;
