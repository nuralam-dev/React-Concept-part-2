import "./App.css";
import Batsman from "./batsman";
import Api from "./api"

function App() {
  function handleClick01() {
    alert("handleClick01");
  }
  function btnHandle02() {
    alert("2nd btn");
  }
  const handleClick03 = () => {
    alert("This is arrow function");
  };

  const addNumber = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>React Concept part 2</h1>
      <Batsman></Batsman>
      <Api></Api>
      <section className="grid">
        <button onClick={handleClick01}>Click 01</button>
        <button onClick={btnHandle02}>click 02</button>

        <button onClick={handleClick03}>Click 03</button>

        <button
          onClick={function Click() {
            alert("in line btn");
          }}
        >
          click
        </button>
        <button onClick={() => alert("in line arrow function")}>
          click 04
        </button>
        <button onClick={() => addNumber(10)}>Add New Num</button>
      </section>
    </>
  );
}

export default App;
