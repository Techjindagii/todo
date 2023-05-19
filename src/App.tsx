import { useState, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleComplete } from "./store/todoslice";

import Input from "./components/input";
import Button from "./components/button";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const onChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  const onClick = useCallback(() => {
    dispatch(addTodo({ text: text, completed: false, id: Date.now() }));
    setText("");
  }, [text]);

  return (
    <>
      <Input placeholder="input todo" onChange={onChange} value={text} />
      <Button onClick={onClick}>Add todo</Button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <span>
              {todo.text} completed:{todo.completed.toString()}
            </span>
            <Button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </Button>
            <Button onClick={() => dispatch(toggleComplete(todo.id))}>
              Toggle
            </Button>
          </div>
        );
      })}
    </>
  );
}

export default App;
