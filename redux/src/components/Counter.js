//this is a custom react hook which we will use to have access to parts of that store;
import {useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';
const Counter = () => {
  //this hook will give us a dispatch function which we can execute
  const dispatch = useDispatch();
  //using useselector on the store react will automatically set a subscription to this store
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  } 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div> 
        <button onClick={increment}>Incremet</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
