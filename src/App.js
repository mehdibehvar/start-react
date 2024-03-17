import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Profile from './components/Profile';
import ProducList from './components/ProducList';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <Profile/>
      <hr/>
      <ProducList/>
    </div>
  );
}

export default App;
