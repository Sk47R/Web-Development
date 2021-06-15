import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos";

const contentDummy = [
  {
    text: "Classes at 10",
    id: 1,
  },
  {
    text: "Break at 12: 45",
    id: 1,
  },
  {
    text: "Lab after 5",
    id: 1,
  },
];

function App() {
  const [content, contentFunction] = useState(contentDummy);

  function textFunction(data) {
    contentFunction(function (prevData) {
      return [data, ...prevData];
    });
  }
  return (
    <div>
      <Todos display={content} toApp={textFunction}></Todos>
    </div>
  );
}

export default App;
