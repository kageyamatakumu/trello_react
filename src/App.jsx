import './App.css';
import { Header } from './components/header/Header';
import { TaskCards } from './components/header/task/TaskCards';

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
