import Backend from './components/backend'
import Card from './components/card'
import Copyright from './components/copyright'
import Nav from './components/navigation'
import './App.css';



function App() {
  return (
    <div className="App">
      <Nav />
      <Card />
      <Backend />
      <Copyright />
    </div>
  );
}

export default App;
