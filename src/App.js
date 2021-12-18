
import './css/style.min.css';
import {HashRouter as Router,Link,Routes,Route} from 'react-router-dom'
import StronaGlowna from './components/StronaGlowna';
import Kontakt from './components/Kontakt';

function App() {
  return (
    <Router >
    <div className="App">
  <Link to="main">Strona Glowna</Link>
  <Link to="kontakt">Kontakt</Link>

  <div className="main">
    <Routes>
      <Route path="#main" element={<StronaGlowna/>}></Route>
      <Route path="#kontakt" element={<Kontakt/>}></Route>
    </Routes>
  </div>
    </div>
    </Router>
  );
}

export default App;
