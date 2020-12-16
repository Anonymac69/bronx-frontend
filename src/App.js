import { BrowserRouter as Router, Route } from "react-router-dom";
import { Articles } from './components/articles'
import { ArticleAdd } from "./components/articleAdd";
import { ArticleEdit } from "./components/articleEdit";
import Article from "./components/article";
import Card from "./components/card";
import Copyright from "./components/copyright";
import Nav from "./components/navigation";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <main className="App">
        <Nav />
        <Route path="/" exact component={Articles} />
        <Route path="/articles/new" exact component={ArticleAdd} />
        <Route path="/articles/:id" exact component={Article} />
        <Route path="/articles/:id/edit" exact component={ArticleEdit} />
        <Route path="/articles/cards" exact component={Card} />
        <Copyright />
      </main>
    </Router>
    </>
  );
}

export default App;
