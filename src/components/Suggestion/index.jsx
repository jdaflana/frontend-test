import React from "react";
import "./Suggestion.css"

const Suggestion = ({ tabIndex = 0, id, title, onClick }) => {
  return (
    title && <li
      className="suggestion-list-item"
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onClick}
      key={id}
      data-cy={`suggestion-${tabIndex}`}
    >
      {title}
    </li>
  );
}

export default Suggestion