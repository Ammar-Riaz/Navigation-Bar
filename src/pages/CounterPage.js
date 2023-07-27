import { useState } from "react";
import { useReducer } from "react";
import Panel from "../componenets/Panel";

function CounterPage() {
  //   const [count, setCount] = useState(0);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };
        break;
      case "decrement":
        return {
          ...state,
          count: state.count - 1,
        };
        break;
      case "add-to-count":
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
        break;
      case "value-to-add":
        return {
          ...state,
          valueToAdd: action.payload,
        };
        break;

      default:
        break;
    }

    // if (action.value === "increment") {
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };
    // }

    // if (action.value === "value-to-add") {
    //   return {
    //     ...state,
    //     valueToAdd: action.payload,
    //   };
    // }

    return state;
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: "increment",
    });
    // return setCount(count + 1);
  };

  const decrement = () => {
    dispatch({
      type: "decrement",
    });
    // return setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: "value-to-add",
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "add-to-count",
    });

    // setCount(count + valueToAdd);
  };

  return (
    <Panel>
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <button className="py-1.5 border px-3" onClick={increment}>
          Increment
        </button>
        <button className="py-1.5 border px-3" onClick={decrement}>
          Decrement
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <button className="py-1.5 border px-3">Add it!</button>
      </form>
    </Panel>
  );
}

export default CounterPage;
