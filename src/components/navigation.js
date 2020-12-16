import React from "react";
import { Link } from "react-router-dom";

const navigation = () => {
  return (
    <div className="nav-wrap">
      <main className="nav-main">
        <h3>
          <a href="/" className="link-alt">
            React Bronx
          </a>
        </h3>

        <ul className="link-wrap">
          <Link className="link-alt link-font" to={"/"}>
            Articles
          </Link>
          <Link className="link-alt link-font" to={"/articles/new"}>
            Add New Article
          </Link>
        </ul>
      </main>
    </div>
  );
};

export default navigation;
