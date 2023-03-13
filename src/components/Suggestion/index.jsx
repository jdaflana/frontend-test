import React from "react";
import "./Suggestion.css"

const Suggestion = ({ tabIndex, id, title, onClick }) => {
  return (
    title && <li
      className="suggestion-list-item"
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onClick}
      key={id}
    >
      {title}
    </li>
  );
}

export default Suggestion