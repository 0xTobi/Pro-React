import './App.css';
import {useSelector,  useDispatch} from "react-redux"
import {increment, decrement} from "./actions/ActionCreator"

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Counter = {counter}</h1>
        <button onClick={() => dispatch(increment(100))}>+</button>
        <button onClick={() => dispatch(decrement(2))}>-</button>

        {isLogged ? <h3>Valuable information I shouldnt see</h3> : ""}
    </div>
  );
}

export default App;
