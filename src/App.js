import Dialog from "./components/Dialog/Dialog";

const Child = () => {
  return (
    <div className="App">
      <Dialog title="Title">Conteúdo do meu Dialog</Dialog>
    </div>
  );
};

const Father = () => {
  return (
    <div style={{ border: "20px solid red" }}>
      <Child />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Father />
    </div>
  );
};

export default App;
