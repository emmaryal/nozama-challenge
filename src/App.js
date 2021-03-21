import './App.css';
import Header from './Header'
import Calendar from './Calendar'
import Stats from './Stats'
import Graph from './Graph'



function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Calendar />
      <Stats />
      </div>
      <Graph />
    </div>
  );
}

export default App;
