import React from "react";
import axios from "axios";

// const [article, setArticle] = React.useState({
//   title: "",
//   content: "",
//   author: "",
//   email: "",
// });

// const [isLoading, setIsLoading] = React.useState(false)

export class ArticleEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: "",
      email: "",
      isLoading: false,
      updated: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.setState({ updated: true });
    axios
      .get(`http://localhost:8000/article/${this.props.match.params.id}`)
      .then((res) => {
        const { title, content, author, email } = res.data;
        this.setState({ title, content, author, email, isLoading: false });
      })
      .catch((err) => console.log(err.response));
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;

    axios
      .put(`http://localhost:8000/article/${this.props.match.params.id}/`, data)
      .then((res) => {
        this.props.history.push(`/`);
      })
      .catch((err) => console.log(err.response));
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    if (this.state.updated) return <p>Updated Successfully</p>;

    return (
      <div className="box">
        <form onSubmit={this.handleSubmit} className="forms">
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            name="content"
            value={this.state.content}
            placeholder="Content"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="author"
            value={this.state.author}
            placeholder="Author"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
