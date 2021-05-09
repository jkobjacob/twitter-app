import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/';
import SignUpPage from './pages/signup';
import FeedPage from './pages/feed';

const Link2 = () => {
  return <>Link2</>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/feed" component={FeedPage} />
      </Router>
    </div>
  );
}

export default App;
