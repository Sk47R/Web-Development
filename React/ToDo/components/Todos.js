import "./Todos.css";
import Input from "./Input";
import DisplayContent from "./DisplayContent";

function Todos(props) {
  function objFunction(data) {
    const obj = {
      ...data,
      id: Math.ceil(Math.random() * 20),
    };
    props.toApp(obj);
  }
  return (
    <div className="container">
      <div className="container-2">
        <p className="header">Things to Do</p>
        <Input toInput={objFunction}></Input>
        {props.display.map(function (element) {
          return <DisplayContent text={element.text}></DisplayContent>;
        })}
      </div>
    </div>
  );
}

export default Todos;
