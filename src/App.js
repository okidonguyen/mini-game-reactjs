import "./App.css";
import FlowersQuiz from "./components/FlowersQuiz/FlowersQuiz";

function App() {
  return (
    <div className="App">
      <h1>Mini Game Make with Reactjs</h1>
      <p>Some fun of game make by me</p>
      <FlowersQuiz />
      {/* Clear local storeage*/}
      <button
        onClick={() => {
          localStorage.clear();
          window.location = "/";
        }}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
      >
        CLEAR LOCALSTORAGE
      </button>
    </div>
  );
}

export default App;
