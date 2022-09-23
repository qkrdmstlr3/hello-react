import styled from "@emotion/styled";
import "./App.css";

const A = styled.a``;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <A
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </A>
      </header>
    </div>
  );
}

export default App;
