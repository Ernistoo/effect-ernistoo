import { useState, useEffect } from "react";
import ToDo from "./ToDo";
import Comment from "./Comment";

function App() {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Hello");
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );

      const data = await response.json();
      console.log(data);
      setTodo(data);
      setLoading(false);
    }

    getData();
  }, []);
  // const todo = {
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false,
  // };
  return (
    <div className="App">
      {/* {loading ? <p>Loading...</p> : <ToDo {...todo} />} */}
      <Comment />
    </div>
  );
}

export default App;
