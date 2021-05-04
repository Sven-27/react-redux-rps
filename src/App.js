import './App.css';
import ScoreBoard from './components/ScoreBoard'
import Hands from './components/Hands'
import Contest from './components/Contest'
import { selectUserHand } from './slices/gameSlice';
import { useSelector } from "react-redux";

function App() {
  const userHand = useSelector(selectUserHand)

  return (
    <div className="app">
      <ScoreBoard />
      {
        !userHand ? <Hands />
        : <Contest />
      }
      
    </div>
  );
}

export default App;
