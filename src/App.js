import ToDo from './ToDo';

function App() {
  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };
  return (
    
    <div className="App">
      <ToDo todo={todo}/>
    </div>
  );
}

export default App;
