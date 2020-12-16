import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Articles extends Component {
  state = { articles: [] };

  async componentDidMount() {
    let articlesList = await axios.get("http://localhost:8000/article");
    this.setState({ articles: articlesList.data });
    // console.log(this.state.articles);
  }

  render() {
    return (
      <div className="card-single">
        {this.state.articles.map((article) => (
          <p key={article.id}>
            <Link className="link" to={`/articles/${article.id}`}>
              {article.title}
            </Link>
          </p>
        ))}
      </div>
    );
  }
}
