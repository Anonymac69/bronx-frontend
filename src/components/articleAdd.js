import axios from "axios";
import React from "react";

export class ArticleAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: "",
      email: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    alert("A name was submitted: " + this.state.value);
    const data = this.state;

    axios
      .post("http://localhost:8000/article/", data)
      .then((res) => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err.response && err.response.data));
  }

  render() {
    const { title } = this.state;
    return (
      <div className="box">
        <form onSubmit={this.handleSubmit} className="forms">
          <label>Title: </label>{" "}
          <input type="text" name="title" onChange={this.handleInputChange} />
          <label> Content: </label>
          <textarea
            type="text"
            name="content"
            onChange={this.handleInputChange}
          />
          <label> Author: </label>
          <input type="text" name="author" onChange={this.handleInputChange} />
          <label> Email: </label>
          <input type="text" name="email" onChange={this.handleInputChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
