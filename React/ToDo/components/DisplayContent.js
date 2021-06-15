import "./DisplayContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

function DisplayContent(props) {
  return (
    <div className="content">
      <div className="text">
        <p>{props.text}</p>
      </div>
      <div className="icon-2">
        <FontAwesomeIcon
          icon={faCheckSquare}
          className="icon-text check"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTrash}
          className="icon-text trash"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default DisplayContent;
