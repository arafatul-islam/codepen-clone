import "./App.css";
import CodeEditor from "./section/CodeEditor";
import Header from "./section/Header";
import Output from "./section/Output";
import DataContextProvider from "./context/DataContext";

function App() {
  return (
    <>
      <Header />
      <DataContextProvider>
        <CodeEditor />
        <Output />
      </DataContextProvider>
    </>
  );
}

export default App;
