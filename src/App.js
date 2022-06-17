import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./component/pages/Home";  
import Show from "./component/pages/Show";  

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* <img className="header-img" src="https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?cs=srgb&dl=pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2251206.jpg&fm=jpg"/> */}
          <h1>TV Bland</h1>
          {document.location.href.indexOf('show') === -1 ?
          <p>NEVER​BLAND​ are committed to creating great experiences - that starts, and ends with our people and their ability. A big part of that process involves code. So, to get to know you better, we’d like to read a little of your code.</p>
          : ``
          }
        </header>
        <Switch>
          {/* <Route path="/show" exact component={Home} /> */}
          <Route path="/show/:id" component={Show} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
