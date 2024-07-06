import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync } from "../store/reducers/counterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  console.log(value);
  const dispactch = useDispatch();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-2xl font-medium">Counter {value}</h1>
      <button
        onClick={()=> dispactch(increment())}
        className="mb-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >
        Increment
      </button>
     
      <button onClick={()=> dispactch(decrement())} className="mb-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700">
        Decrement
      </button>
      <button
      onClick={()=> {dispactch(incrementAsync(5))}}
      className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700">
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
